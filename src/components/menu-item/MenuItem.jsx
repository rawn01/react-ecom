import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.scss";

const MenuItem = (props) => {
  return (
    <div 
      className={`menu-item ${props.size}`}
      onClick={() => props.history.push(`/${props.linkUrl}`)}
    >
      <div
        className="background-image" 
        style={{ 
          backgroundImage: `url(${props.imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
