import React from "react";
import "./Share.css";
import data_product from "../Assets/data";
import Items from "../Items/Items";

export const Share = () => {
  return (
    <div className="share">
      <h1>categoria de smartphones</h1>
      <hr />
      <div className="share-item">
        {data_product.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Share;
