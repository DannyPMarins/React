import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import { useParams } from "react-router-dom";
import Productlink from "../Components/Productlink/Productlink.jsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Productlink product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
