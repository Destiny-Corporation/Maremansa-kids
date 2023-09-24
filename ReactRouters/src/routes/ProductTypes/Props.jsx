import React from "react";
import "../../styles/ProductTypes/Props.css";
import { Link } from "react-router-dom";

const Props = () => {
  return (
    <div className='main'>
    <header className="main-header">
        <div className="logo">
        <Link to="/"> <img src="src/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons">
            <Link to="/login">
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
      <h1>Acessórios</h1>
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

export default Props;
