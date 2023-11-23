import React from "react";
import "../../styles/HeaderPaths/Cart.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Cart = () => {
  let isLoggedIn = false

if (localStorage.getItem("user") !== null) {
    localStorage.setItem("loggedIn", "true");
    isLoggedIn = true
};

  return (
    <div className="main">
    <header className="main-header">
        <div className="search-container-header">
          <input type="text" className="search-bar-header" placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"/>
            <button className="search-button-header" type="submit">
              <i className="bx bx-search"></i>
            </button>
        </div>
        <div className="header-logo-center">
        <Link to="/"> <img src="/assets/logo.png" alt="Logo" className="header-logo-center"/> </Link>
        </div>
        <div className="icons-about">
            <Link to="/requests">
              <i
                className="bx bx-user bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
            <Link to="/cart">
              <i
                className="bx bx-cart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
        </div>
      </header>

      <div className="container-subheader">
        <div className="container-cart">
          <i className='bx bx-cart bt-header'></i>
          <h6>| Carrinho (0)</h6>
        </div>
      </div>
      {isLoggedIn ? (
      <div className="empty-cart">
        <img src="/assets/empty-cart.png" alt="Carrinho Vazio" />
        <div className="effect">
        <div className="button">
          <img src="/assets/shopping-button.png" alt="Botão de Compras" />
        </div>
        </div>
      </div>
      ) : (
        // usuário não está logado:
        <div className="login-message">
          <div className="empty-cart">
        <img src="/assets/empty-cart-login.png" alt="Carrinho Vazio" />
        <div className="effect">
        <div className="button">
          <Link to="/login"> <img src="/assets/login.png" alt="Botão de Compras" /></Link>
        </div>
        </div>
      </div>
        </div>
      )}


      <footer>
        <section className="footer-section">
          <div className="footer-section-div">
            <img src="/assets/whale.png" />
          </div>

          <div className="footer-section-div">
            <h3>SOBRE NÓS</h3>
            <li>
                <Link to="/company">A EMPRESA</Link>
            </li>
            <li>
                <Link to="/physicalstore">CONHEÇA NOSSA LOJA FÍSICA</Link>
            </li>
            <li>
                <Link to="/partners">NOSSOS PARCEIROS</Link>
            </li>
          </div>

          <div className="footer-section-div">
            <h3>SUPORTE</h3>
            <li>
                <Link to="/services">ATENDIMENTO</Link>
            </li>
            <li>
                <Link to="/exchanges">TROCAS E DEVOLUÇÕES</Link>
            </li>
            <li>
                <Link to="/sitemap">MAPA DO SITE</Link>
            </li>
          </div>

          <div className="footer-section-div">
            <h3>CONTATOS</h3>
              <i className="fa fa-whatsapp"></i>
              <i className="fa fa-google"></i>
              <i className="fa fa-instagram"></i>
          </div>
        </section>
      </footer>
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
    </div>
  );
};

export default Cart;
