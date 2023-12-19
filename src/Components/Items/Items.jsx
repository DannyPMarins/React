import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div className="items">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>

      <div className="items-valor">
        <div className="items-new-price">${props.new_price}</div>

        <div className="items-old-price">${props.old_price}</div>
      </div>
      <button className="addToCartBtn">Adicionar ao carrinho</button>
    </div>
  );
};

export default Items;
