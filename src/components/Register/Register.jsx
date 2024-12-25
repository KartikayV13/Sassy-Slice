import React from 'react'
import './Register.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link , NavLink} from 'react-router-dom'

function Register() {
  return (
    <>
    
    <div>
    <div class="rgstr-container">
      <div class="rgstr-upper">
        <div> <Link to="/">
          <IoMdArrowRoundBack class="back"/>
          </Link>
          <p>CREATE YOUR ACCOUNT</p>
          </div>
      </div>
      <div class="rgstr-lower">
          
        <form class="register-form">
          
          <div class="Input">

         <div class="email"> <input type="email" placeholder='Email12@gmail.com' /></div>

           <div class="name"><input type="Name"  placeholder='Full Name'/></div>

           <div class="user"><input type="Name"  placeholder='Username'/></div>

           <div class="pass passs"><input type="password"  placeholder='Password'/></div>

           <div class="pass rept-pass"><input type="password"  placeholder=' Repeat Password'/></div>

          </div>

          <div class="crt-btn">
            <button>Create Account</button>
          </div>
          
        </form>
      </div>
    </div>
   </div>
   
   </>
  )
}

export default Register