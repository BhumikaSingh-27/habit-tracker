import React from "react";
import "./button.css";

const Button = ({ text , clickHandler}) => {
  return (
    <div>
      <button className="button" onClick={clickHandler}>{text}</button>
    </div>
  );
};

export default Button;
