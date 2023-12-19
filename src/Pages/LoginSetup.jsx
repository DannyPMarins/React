import React from "react";
import "./CSS/LoginSetup.css";
import mini_logo from "../Components/Imgs/img_mini/login-icon.png";

const LoginSetup = () => {
  return (
    <div className="loginsetup">
      <div className="loginsetup-container">
        <img src={mini_logo} alt="mini_logo" />
        <h1>Entrar</h1>

        <div className="loginsetup-fields">
          <input type="text" placeholder="seu nome" />
          <input type="email" name="email" placeholder="seu e-mail" />
          <input type="password" name="password" placeholder="sua senha" />
        </div>
        <button>Continuar</button>
        <p className="loginsetup-login">
          Voçe já tem conta? <span>Entre aqui</span>
        </p>

        <div className="loginsetup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            ao contunuar eu concordo com a politica dos termos e privacidade
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSetup;
