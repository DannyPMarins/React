import React from "react";
import "./Hero.css";
import iphone_icon1 from "../Imgs/iphone_icon1.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-catalogo">
        <h2>Novos Produtos</h2>
        <div>
          <div className="icon-iphone">
            <p>Novo</p>
            <img src={iphone_icon1} alt="iphone-icon" />
          </div>
          <p>Smartphones</p>
        </div>
        <div className="hero-btn"></div>
      </div>
    </div>
  );
};

export default Hero;
