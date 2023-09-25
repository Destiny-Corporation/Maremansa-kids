import React from "react";
import "../../styles/HeaderPaths/Wishlist.css";
import { Link } from "react-router-dom";

const Wishlist = () => {

let isLoggedIn = false

if (localStorage.getItem("user") !== null) {
    localStorage.setItem("loggedIn", "true");
    isLoggedIn = true
};

  return (
    <div className="main">
    <header className="main-header">
        <div className="search-container">
            <input type="text" className="search-bar" placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"/>
                <button className="search-button" type="submit">
                  <i className="bx bx-search"></i>
                </button>
        </div>
        <div className="logo">
        <Link to="/"> <img src="src/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons">
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
        <div className="container-wishlist">
          <i className='bx bx-heart bt-header'></i>
          <h6>| Lista de Desejos (0)</h6>
        </div>
      </div>
      {isLoggedIn ? (
        // Conteúdo da Lista de Desejos quando o usuário está logado
        <div className="wishlist-content">
          <div className="empty-wishlist">
            <img src="src/assets/empty-wishlist.png" alt="Lista de Desejos Vazia" />
            <div className="effect">
              <div className="button">
                <img
                  src="src/assets/shopping-button.png"
                  alt="Ir às Compras"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Componente de login/mensagem quando o usuário não está logado
        <div className="login-message">
          <p>Por favor, faça o login para acessar sua lista de desejos.</p>
          <Link to="/login">Login</Link>
        </div>
      )}
      <footer>
        <section className="footer-section">
          <div className="footer-section-div">
            <img src="src/assets/whale.png" />
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
    </div>
  );
};

export default Wishlist;
