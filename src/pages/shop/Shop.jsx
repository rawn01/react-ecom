import React from "react";
import Preview from "../../components/preview/Preview.jsx";
import shopData from './Shop-data.js';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map((item) => {
          return (
            <Preview key={item.id} {...item} />
          );
        })}
      </div>
    );
  }
}

export default Shop;
