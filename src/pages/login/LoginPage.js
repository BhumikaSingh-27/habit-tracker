import React, { useState } from "react";
import "./loginPage.css";
import { NavLink } from "react-router-dom";
import { FaArrowAltCircleRight, FaEyeSlash, FaEye } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const tooglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <div className="login-main">
      <div className="login-page">
        <div className="login-container">
          <h3>Sign In</h3>
          <div className="login-element">
            <label>Email:</label>{" "}
            <input
             
              className="input-element"
              type="text"
              placeholder="Enter email"
              required
            />
            <label>Password:</label>
            <div className="password-div">
            <input
        
              className="input-element password-div-input"
              type={showPassword ? "text" : "password"}
              placeholder="***********"
              required
            />
            <div className="password-icon" onClick={tooglePassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
            </div>
            <button className="login-btn bg-clr-primary">Login</button>
            <button className="login-btn secondary">Login as a Guest</button>
          </div>

          {/* <p>
            <a href="/root">Forgot password?</a>
          </p> */}
          <NavLink className="link" to="/signup">
            Create a new account <FaArrowAltCircleRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
