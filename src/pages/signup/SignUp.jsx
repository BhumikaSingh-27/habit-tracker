import React, { useState } from "react";
import "./signup.css";
import { FaEyeSlash, FaEye, FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="signup-main">
      <div className="signup-container">
        <h2 className="center">Sign Up</h2>
        <div className="signup-content">
          <label htmlFor="">First Name:</label>
          <input type="text" placeholder="Ashwin" required />
        </div>
        <div className="signup-content">
          <label htmlFor="">Last Name:</label>
          <input type="text" placeholder="Singh" required />
        </div>
        <div className="signup-content">
          <label htmlFor="">Username:</label>
          <input type="text" placeholder="ashiven@123" required />
        </div>
        <div className="signup-content">
          <label htmlFor="">Password:</label>
          <div className="input-password">
            <input
              type={showpassword ? "text" : "password"}
              placeholder="**********"
              required
            />

            <em onClick={() => setShowPassword(!showpassword)}>
              {" "}
              {showpassword ? <FaEye /> : <FaEyeSlash />}
            </em>
          </div>
        </div>
        <button className="login-btn padding-1">Sign up</button>
        <div className="signup-nav" onClick={() => navigate("/login")}>
          Already have an account?
          <FaArrowAltCircleRight />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
