import React from "react";
import "../../styles/ProductTypes/Male.css";
import { Link } from "react-router-dom";

const Male = () => {
  return (
    <>
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

      <hr size="1" />
      <div class= "título">
        <li>MASCULINO</li>
      </div>

        <div className="Container-roupas">
            <div className="roupa">
              <a><Link to="#"><img src="src/assets/male-baby.png" /></Link></a>
            </div>


           <div className="roupa">
            <a><Link to="#"><img src="src/assets/male-infantil.png" /></Link></a>
          </div>

          <div className="roupa">
            <a><Link to="#"><img src="src/assets/male-juvenil.png" /></Link></a>
          </div>
        </div>

      <footer>
        <section className="footer-section">
          <div className="footer-section-div">
            <img src="src/assets/baleia.png" />
          </div>

          <div className="footer-section-div">
            <h3>SOBRE NÓS</h3>
            <li>
              <a href="#">
                <Link to="/company">A EMPRESA</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to="/physicalstore">CONHEÇA NOSSA LOJA FÍSICA</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to="/partners">NOSSOS PARCEIROS</Link>
              </a>
            </li>
          </div>

          <div className="footer-section-div">
            <h3>SUPORTE</h3>
            <li>
              <a href="#">
                <Link to="/services">ATENDIMENTO</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to="/exchanges">TROCAS E DEVOLUÇÕES</Link>
              </a>
            </li>
            <li>
              <a href="#">
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
    </>
  );
};

export default Male;
