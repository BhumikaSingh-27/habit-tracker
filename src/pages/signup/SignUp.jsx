import React, { useState } from "react";
import "./signup.css";
import { FaEyeSlash, FaEye, FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showpassword, setShowPassword] = useState(false);
  const [signupData, setSingupData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  return (
    <div className="signup-main">
      <div className="signup-container">
        <h2 className="center">Sign Up</h2>
        <div className="signup-content">
          <label htmlFor="">First Name:</label>
          <input
            value={signupData.firstname}
            type="text"
            placeholder="Manovita"
            onChange={(e) =>
              setSingupData({ ...signupData, firstname: e.target.value })
            }
            required
          />
        </div>
        <div className="signup-content">
          <label htmlFor="">Last Name:</label>
          <input
            value={signupData.lastname}
            type="text"
            placeholder="Singh"
            onChange={(e) =>
              setSingupData({ ...signupData, lastname: e.target.value })
            }
            required
          />
        </div>
        <div className="signup-content">
          <label htmlFor="">Username:</label>
          <input
            value={signupData.username}
            type="text"
            placeholder="manovita@123"
            onChange={(e) =>
              setSingupData({ ...signupData, username: e.target.value })
            }
            required
          />
        </div>
        <div className="signup-content">
          <label htmlFor="">Password:</label>
          <div className="input-password">
            <input
              value={signupData.password}
              type={showpassword ? "text" : "password"}
              placeholder="**********"
              onChange={(e) =>
                setSingupData({ ...signupData, password: e.target.value })
              }
              required
            />

            <em onClick={() => setShowPassword(!showpassword)}>
              {" "}
              {showpassword ? <FaEye /> : <FaEyeSlash />}
            </em>
          </div>
        </div>
        <button
          className="login-btn padding-1"
          onClick={() => console.log(signupData)}
        >
          Sign up
        </button>
        <div className="signup-nav" onClick={() => navigate("/login")}>
          Already have an account?
          <FaArrowAltCircleRight />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
