import React, { createContext } from "react";
import data_product from "../Components/Assets/data";

export const ShopContext = createContext([]);

const ShopContextProvider = (props) => {
  const contextValeu = { data_product };

  return (
    <ShopContext.Provider value={contextValeu}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
