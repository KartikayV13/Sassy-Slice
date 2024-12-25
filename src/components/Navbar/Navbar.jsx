import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <>
      <div class="Navbar">
        <Link to="/">
          <img src={assets.Logo} alt="" class="logo" />
        </Link>
        <p>THE SASSY SLICE</p>
        <ul class="navbar-menu">
          <Link to="/">
            <li
              onClick={() => setMenu("Home")}
              class={menu === "Home" ? "active" : ""}
            >
              Home
            </li>
          </Link>
          <li
            onClick={() => setMenu("contact-us")}
            class={menu === "contact-us" ? "active" : ""}
          >
            Contact us
          </li>
        </ul>

        <div class="Navbar-right">
          <div class="search-icon">
            {/* <img src={assets.search} alt="" /> */}

            <Link to="/Login">
              <button>Sign in</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
