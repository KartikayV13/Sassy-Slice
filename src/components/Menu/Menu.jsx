import "./Menu.css";
import { Menu_list } from "../../assets/assets";

function Menu({ category, setCategory }) {
  return (
    <>
      <div class="menu">
        <div class="Menu-list">
          {/* <hr /> */}
          <div class="explore-menu-list">
            {Menu_list.map((item, index) => {
              return (
                <div
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.menu_name ? "All" : item.menu_name
                    )
                  }
                  key={index}
                  className="explore-menu-list-item"
                >
                  <img
                    class={category === item.menu_name ? "active" : ""}
                    src={item.menu_image}
                    alt=""
                  />
                  <p>{item.menu_name}</p>
                </div>
              );
            })}
          </div>
          {/* <hr /> */}
        </div>
      </div>
    </>
  );
}

export default Menu;
