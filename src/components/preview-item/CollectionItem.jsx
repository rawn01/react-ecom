import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/cart/cartAction";
import CustomButton from "../custom-button/CustomButton";
import "./CollectionItem.scss";

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
        onClick={() => props.addToCart({
          id: props.id,
          imageUrl: props.imageUrl,
          name: props.name,
          price: props.price
        })}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => dispatch(addToCart(item)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);