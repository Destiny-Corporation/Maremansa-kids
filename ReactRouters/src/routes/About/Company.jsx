import React from "react";
import "../../styles/About/Company.css";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="main">
    <header className="main-header">
        <div className="logo">
        <Link to="/"> <img src="src/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons">
          <a href="#">
            <Link to="/login">
              <i
                className="bx bx-user bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
          <a href="#">
            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
          <a href="#">
            <Link to="/cart">
              <i
                className="bx bx-cart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
        </div>
      </header>

      <div className= "title">
    <h4>MareMansa Kids | A Empresa</h4>
  </div>
  
      <hr size="1" />

  <div className="about">
    <div classname="empresa">
      <img src="src/assets/empresa.png" />
    </div>
  </div>

        <hr size="1" />

      <footer>
        <section className="footer-section">
          <div className="footer-section-div">
            <img src="src/assets/baleia.png" />
          </div>

          <div className="footer-section-div">
            <h3>SOBRE NÓS</h3>
            <li>
              <a>
                <Link to="/company">A EMPRESA</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/physicalstore">CONHEÇA NOSSA LOJA FÍSICA</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/partners">NOSSOS PARCEIROS</Link>
              </a>
            </li>
          </div>

          <div className="footer-section-div">
            <h3>SUPORTE</h3>
            <li>
              <a>
                <Link to="/services">ATENDIMENTO</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/exchanges">TROCAS E DEVOLUÇÕES</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/sitemap">MAPA DO SITE</Link>
              </a>
            </li>
          </div>

          <div className="footer-section-div">
            <h3>CONTATOS</h3>
            <a href="#">
              <i className="fa fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fa fa-google"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Company;
