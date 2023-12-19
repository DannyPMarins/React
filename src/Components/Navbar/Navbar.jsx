import React, { useState } from "react";
import "./Navbar.css";
import iphone_icon1_mini from "../Imgs/img_mini/iphone_icon1_mini.png";
import cart from "../Imgs/cart.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="logo-nav">
        <img src={iphone_icon1_mini} alt="phone" />
        <p>Apple Tree Store</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("sobre");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/sobre">
            Sobre
          </Link>
          {menu === "sobre" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contato");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/contato">
            Contato
          </Link>
          {menu === "contato" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="cart" className="cart-logo" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
