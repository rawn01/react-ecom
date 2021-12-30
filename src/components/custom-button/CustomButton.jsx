import React from "react";
import "./CustomButton.scss";

const CustomButton = (props) => {
  const {
    type = "button",
    onClick,
    classNames="",
    inverted=false
  } = props;

  return (
    <button 
      className={`custom-button ${classNames} ${inverted ? "inverted" : ""}`}
      onClick={onClick}
      type={type}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
