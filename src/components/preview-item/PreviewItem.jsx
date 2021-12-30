import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./PreviewItem.scss";

const CollectionItem = (props) => {

  return (
    <div className="collection-item">
      <div 
        className="image" 
        style={{
          backgroundImage: `url(${props.imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <span className="price">{props.price}</span>
      </div>
      <CustomButton
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;