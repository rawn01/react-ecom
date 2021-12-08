import React from "react";
import "./FormInput.scss";

const FormInput = (props) => {
  const {
    placeholder = null,
    type = "text",
    value = null,
    required = false,
    name = "",
    onChange,
    label,
  } = props;

  return (
    <div className="form-group">
      <input
        className="form-input"
        placeholder={placeholder}
        type={type}
        value={value}
        required={required}
        name={name}
        onChange={onChange}
      />
      {label && (
        <label
          className={`form-input-label ${props.value.length ? "shrink" : ""}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
