import React from "react";
import "./Buttons.css";

const Button = ({ labels, bgColor, color }) => {
  return (
    <button style={{ backgroundColor: bgColor, color: color }}>{labels}</button>
  );
};
export default Button;
