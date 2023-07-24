import React, { useRef, useState } from "react";
import "./loginPage.css";
import { NavLink } from "react-router-dom";
import { FaArrowAltCircleRight, FaEyeSlash, FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { loginApiCall } from "../../redux/authentication/authActions";

const LoginPage = ({ loginApiCall, userData, token }) => {
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const tooglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const loginHandler = () => {
    console.log("hello");
    loginApiCall({ email: email.current, password: password.current });
    console.log(userData, token);
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
              ref={email}
              onChange={(e) => (email.current = e.target.value)}
              required
            />
            <label>Password:</label>
            <div className="password-div">
              <input
                ref={password}
                className="input-element password-div-input"
                type={showPassword ? "text" : "password"}
                placeholder="***********"
                onChange={(e) => (password.current = e.target.value)}
                required
              />
              <div className="password-icon" onClick={tooglePassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <button className="login-btn bg-clr-primary" onClick={loginHandler}>
              Login
            </button>
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

const mapStateToProp = (state) => {
  return {
    userData: state.user,
    token: state.encodedToken,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    loginApiCall: (obj) => dispatch(loginApiCall(obj)),
  };
};

export default connect(mapStateToProp, mapDispatchToState)(LoginPage);
