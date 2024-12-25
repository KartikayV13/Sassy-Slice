import React from "react";
import "./Footer.css";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="footer-container">
      <div class="upper-footer">
        <Link to="/Cart">
          <div class="cart_footer">
            <FaShoppingCart />
          </div>
        </Link>
      </div>

      <div className="lower-footer">
        <div class="profile-icon-div">
          <CgProfile />
        </div>
      </div>
    </div>
  );
}

export default Footer;
