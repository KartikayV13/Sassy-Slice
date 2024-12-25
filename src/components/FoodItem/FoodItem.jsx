import React from "react";
import { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image, varients }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  const [selectedSize, setSelectedSize] = useState("Regular");


   // Get price for the selected size
   const currentPrice =     Array.isArray(price) && price.length > 0
   ? price[0][selectedSize] // Access price based on selected size
   : price;

  return (
    <>
      <div class="food-item">
        <div class="name-img">
          <div class="food-item-name">
            <p class="name">{name}</p>
            <p class="desc">{description}</p>
          </div>

          <div className="food-item-img-cotainer">
            <img class="food-item-image" src={image} alt="" />
            <br />
            <img src={assets.rating} alt="" class="rating-image" />
          </div>
        </div>

        <div class="price-size">
          {/* Display current price based on selected size */}
          <p className="food-item-price">Price: ₹{currentPrice}</p>

          {!cartItem[id] ? (
            <img
              class="add"
              onClick={() => addToCart(id)}
              src={assets.add}
              alt=""
            />
          ) : (
            <div class="food-item-counter">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.minusfood}
                alt=""
                class="add"
              />
              <p>{cartItem[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.addfood}
                alt=""
                class="add"
              />
            </div>
          )}

{varients && (
            <div className="pizza-size">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {varients.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodItem;
