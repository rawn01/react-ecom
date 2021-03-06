import React from 'react';
import "./WithSpinner.scss";

const WithSpinner = (WrappedComponent) => (props) => {
  const { isLoading, ...otherProps } = props;
  return isLoading ? (
    <div className="spinner-overlay">
      <div className="spinner-container" />
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  )
};

export default WithSpinner;
