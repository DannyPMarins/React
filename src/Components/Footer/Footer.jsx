import React from "react";
import "./Footer.css";
import footer_logo from "../Imgs/img_mini/iphone_icon1_mini2.png";
import facebook_logo from "../Imgs/img_mini/icons-facebook.png";
import instagram_logo from "../Imgs/img_mini/icons-instagram.png";
import twitter_logo from "../Imgs/img_mini/icons-twitter.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="logo-footer" />
        <p>Apple Tree Store</p>
      </div>

      <ul className="footer-links">
        <li>Shop</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-contaier">
          <img src={facebook_logo} alt="facebook" />
        </div>
        <div className="footer-icons-contaier">
          <img src={instagram_logo} alt="instagram" />
        </div>
        <div className="footer-icons-contaier">
          <img src={twitter_logo} alt="twitter" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - all rights reserved | author Daniel Marins.</p>
      </div>
    </div>
  );
};

export default Footer;
