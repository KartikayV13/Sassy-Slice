import React from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { CgProfile } from "react-icons/cg";
import { MdLockOutline } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <div>
        <Link from="login">
          <div class="container">
            <div class="upper">
              <div>
                <Link to="/">
                  <IoMdArrowRoundBack class="back" />
                </Link>
              </div>
              <img src={assets.Logo} alt="" class="logo-login" />
            </div>
            <div class="lower">
              <form action="" class="form-login">
                <div class="numbr-pass">
                  <div class="number-input">
                    {" "}
                    <CgProfile class="number-icon" />
                    <input type="number" placeholder="Enter Your Number" />
                  </div>

                  <div class="pass-input">
                    <MdLockOutline />
                    <input type="text" placeholder="Enter Your Password" />
                  </div>
                </div>

                <div class="forgot">
                  <span>
                    <Link to="/Forgot"> ForgotPassword ? </Link>
                  </span>
                </div>

                <div class="btn">
                  <button>Login</button>
                </div>

                <div class="create">
                  <p>
                    <Link to="/Register"> Create an account</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Login;
