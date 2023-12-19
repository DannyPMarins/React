import React from "react";
import "./Productlink.css";
import arrow_icon from "../Imgs/icon-arrow.png";

const Productlink = (props) => {
  const { product } = props;
  return (
    <div className="productlink">
      home <img src={arrow_icon} alt="arrow" /> shop{" "}
      <img src={arrow_icon} alt="arrow" /> {product.category}{" "}
      <img src={arrow_icon} alt="arrow" /> {product.name}
    </div>
  );
};

export default Productlink;
