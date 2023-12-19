import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-img">
        <img className="productdisplay-main" src={product.image} alt="" />
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default ProductDisplay;
