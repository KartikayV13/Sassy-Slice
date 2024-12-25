import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Forgot.css";

function Forgot() {
  return (
    <>
      <div>
        <div className="forgot-container">
          <div className="forgot-upper">
            <div>
              {" "}
              <Link to="/Login">
                <IoMdArrowRoundBack class="back" />
              </Link>
              <p>Reset Password</p>
            </div>
          </div>
          <div class="forgot-lower">
            <form class="forgot-form">
              <div class="Input">
                <div class="email">
                  {" "}
                  <input type="email" placeholder="Email12@gmail.com" />
                </div>

                <div class="name">
                <input type="text" placeholder="Full Name" />
                </div>

                <div class="pass passs">
                  <input type="password" placeholder="Password" />
                </div>

                <div class="pass rept-pass">
                  <input type="password" placeholder=" Repeat Password" />
                </div>
              </div>

              <div class="rst-btn">
              <button type="submit">Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
