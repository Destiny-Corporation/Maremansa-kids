import React from "react";
import "../../styles/About/PhysicalStore.css";
import { Link } from "react-router-dom";

const PhysicalStore = () => {
  return (
    <div className="main">
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

      <div className="search-container-geral">
        <input
          type="text"
          className="search-bar"
          placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"
        />
        <button className="search-button" type="submit">
          <i className="bx bx-search"></i>
        </button>
      </div>

      <div className="carousel-container">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active btc"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="src/assets/banner.png"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="src/assets/banner-sale.png"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="src/assets/banner-sale-2.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="title-section">
      <h1 className="general-title">MAREMANSA | LOJA FÍSICA</h1>
      <hr className="hr-sections"></hr>
      </div>

      <div className="about">
    <div className="company">
      <img src="src/assets/banner-maremansa.png" />
    </div>
  </div>

  <hr className="hr-sections"></hr>


      <div className="history">
        <div className="maremansa">
          <h3 className="general-subtitle-h3">Visite Nossa Loja Física e Conheça o Encanto em Pessoa!</h3><br></br>
          <p> Estamos entusiasmados em convidar você a uma experiência única de compra em nossa loja física, onde a magia ganha vida e a qualidade ganha forma. Em [Nome da Loja Online], entendemos o valor do contato direto e da oportunidade de conhecer nossos clientes pessoalmente.</p><br></br>
        
          <h3 className="general-subtitle-h3">Localização:</h3><br></br>
          <p className="about-text"> 📍 Endereço: R. Francisco Glicério, 290 - Maraponga</p>
          <p className="about-text"> ⏰ Horário de Funcionamento: 09:00 às 18:00 </p>
          <p className="about-text"> 📞 Telefone: +55 (85) 98174-0078</p><br></br>

          <p className="about-text">Nossa loja física é uma extensão do nosso compromisso com produtos de alta qualidade, atendimento excepcional e um ambiente que reflete nossa paixão pelo que fazemos.</p>

        </div>
      </div>

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
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
    </div>
  );
};

export default PhysicalStore;
