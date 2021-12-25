import React from "react";
import "./CustomButton.scss";

const CustomButton = (props) => {
  const {
    type = "button",
    onClick,
    classNames=""
  } = props;

  return (
    <button 
      className={`custom-button ${classNames}`}
      onClick={onClick}
      type={type}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
