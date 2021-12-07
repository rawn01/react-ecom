import React from "react";
import PreviewItem from "../preview-item/PreviewItem";
import "./Preview.scss";

const Preview = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return (
              <PreviewItem key={item.id} {...item} />
            );
          })}
      </div>
    </div>
  );
};

export default Preview;
