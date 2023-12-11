import React from "react";
import "../../styles/About/Partners.css";
import { Link } from "react-router-dom";

let isLoggedIn = false;


const Partners = () => {

  const userIconLink = isLoggedIn ? "/requests" : "/login";

  if (localStorage.getItem("user") !== null) {
    localStorage.setItem("loggedIn", "true");
    isLoggedIn = true;
  }

  return (
    <>
    <div className="main">
    <header className="main-header">
        <div className="logo-about">
        <Link to="/"> <img src="/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons-about">
            <Link to={userIconLink}>
              <i
                className="bx bx-user bt-header animation"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header animation"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
            <Link to="/cart">
              <i
                className="bx bx-cart bt-header animation"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
        </div>
      </header>

      <div className="search-container-about">
        <input
          type="text"
          className="search-bar"
          placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"
        />
        <button className="search-button" type="submit">
          <i className="bx bx-search"></i>
        </button>
      </div>

      <div className="title-section">
      <h1 className="general-title">MAREMANSA | NOSSOS PARCEIROS</h1>
      <hr className="hr-sections"></hr>
      </div>

      <div className="about">
    <div className="company">
      <img src="/assets/banner-maremansa.png" />
    </div>
  </div>

  <hr className="hr-sections"></hr>


      <div className="history">
        <div className="maremansa">
          <h6 className="general-title-h6">Nossos Valiosos Parceiros: Juntos, Criando Experiências Inesquecíveis.</h6><br></br>
            <p className="partners-text">Na MareMansa Kids, acreditamos que o sucesso é construído em parceria. Estamos orgulhosos de contar com uma rede de parceiros incríveis que desempenham um papel fundamental em nossa jornada para proporcionar a você, nosso cliente querido, experiências de compras excepcionais.</p><br></br>
            <div className="local"><img className='local-image' src="/assets/partners.png"/></div>
        </div>
      </div>

      </div>
      <footer>
        <section className="footer-section">
          <div className="footer-section-div">
        <Link to="/"><img className="rotating-jumping-image" src="/assets/whale.png" /></Link>
          </div>

          <div className="footer-section-div">
            <h3 className='footer-animation-title'>SOBRE NÓS</h3>
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
            <h3 className='footer-animation-title'>SUPORTE</h3>
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
  <h3 className='footer-animation-title'>CONTATOS</h3>
  <a href="https://web.whatsapp.com/send?phone=5585986056136" target="_blank" title="whatsapp">
    <i className="fa fa-whatsapp"></i>
  </a>
  <a href="https://www.facebook.com/maremansakidss" target="_blank" title="facebook">
    <i className="fa fa-facebook"></i>
  </a>
  <a href="https://www.instagram.com/maremansakids/" target="_blank" title="instagram">
    <i className="fa fa-instagram"></i>
  </a>
</div>
        </section>
      </footer>
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
    </>
  );
};

export default Partners;
