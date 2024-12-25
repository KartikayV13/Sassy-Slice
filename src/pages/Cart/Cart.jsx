import { useContext } from "react";
import "./Cart.css";
import StoreContextProvider, { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItem, Food_list, removeFromCart } = useContext(StoreContext);

  // Calculate subtotal
  const subtotal = Food_list.reduce((acc, item) => {
    if (cartItem[item.id] > 0) {
      // Assuming price is an array of objects, and we are taking the Regular size price for now
      const price = Array.isArray(item.price) ? item.price[0].Regular : item.price;
      return acc + price * cartItem[item.id];
    }
    return acc;
  }, 0);


  const deliveryFee = 2;
  const total = subtotal + deliveryFee;



  return (
    <div class="cart">
      <div class="Cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />

        <hr />
        {Food_list.map((item) => {
          if (cartItem[item.id] > 0) {
            // Assuming you have a way to get the selected size for this item
            const selectedSize = item.selectedSize || "Regular"; // Default to Regular if not set
            const itemPrice = item.price[0][selectedSize]; // Get the price based on the selected size
            const quantity = cartItem[item.id];
            const totalPrice = itemPrice * quantity; // Calculate the total price for this item

            return (
              <div key={item.id}>
                <div class="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{itemPrice}</p> {/* Show the price based on selected size */}
                  <p>{quantity}</p>
                  <p>₹{totalPrice}</p> {/* Show the total price */}
                  <p onClick={() => removeFromCart(item.id)} class="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null; // Return null if no items to display
        })}
      </div>
      <div class="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{subtotal}</p> {/* Display subtotal */}
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{deliveryFee}</p> {/* Display delivery fee */}
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{total}</b> {/* Display total price */}
          </div>
          <button>Proceed</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have promocode , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
