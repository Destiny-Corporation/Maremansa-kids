import React from "react";
import "./Home.css";
import Login from "./Login";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="main-header">
        <div className="logo">
          <img src="img/logo.png" alt="Logo" />
        </div>
        <div className="icons">
          <a href="#">
            <i
              className="bx bx-user bt-header"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a href="#">
            <i
              className="bx bx-heart bt-header"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a href="#">
            <i
              className="bx bx-cart bt-header"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
        </div>
      </header>

      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"
        />
        <button className="search-button" type="submit">
          <i className="bx bx-search"></i>
        </button>
      </div>

      <div className="carousel-container">{/* Conteúdo do carrossel */}</div>

      <div className="container-menu-buttons">
        {/* Conteúdo dos botões de menu */}
      </div>

      <hr className="hr-element" />

      <div className="container-clothes">
        {/* Conteúdo dos itens de roupa */}
      </div>

      <footer>{/* Conteúdo do rodapé */}</footer>
    </div>
  );
};

export default Home;
