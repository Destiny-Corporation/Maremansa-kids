import React from "react";
import "../../styles/ProductTypes/Female.css";
import { Link } from "react-router-dom";

const Female = () => {
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
        <li>FEMININO</li>
      </div>

        <div className="Container-roupas">
            <div className="roupa">
              <a><Link to="#"><img src="src/assets/female-baby.png" /></Link></a>
            </div>


           <div className="roupa">
            <a><Link to="#"><img src="src/assets/female-infantil.png" /></Link></a>
          </div>

          <div className="roupa">
            <a><Link to="#"><img src="src/assets/female-juvenil.png" /></Link></a>
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
            <a>
              <i className="fa fa-whatsapp"></i>
            </a>
            <a>
              <i className="fa fa-google"></i>
            </a>
            <a>
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Female;
