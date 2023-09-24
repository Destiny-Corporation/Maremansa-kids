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
      <h1 className="general-title">MAREMANSA | A EMPRESA</h1>
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
          <h3 className="general-title-h3">HISTÓRIA</h3><br></br>
          <p className="about-text"> Há muitos anos, em cidade litorânea chamada Fortaleza, vivia uma mulher chamada Marina.
             Marina tinha um sonho: criar uma empresa que oferecesse roupas e acessórios de alta qualidade para crianças,
              inspirados no encanto do mar e na natureza exuberante que cercava sua cidade natal.</p><br></br>
    
          <p className="about-text">  Com determinação e um grande amor pelo comércio, Marina começou a comercializar peças para crianças. 
            Ela pesquisava materiais de alta qualidade que refletiam a beleza e a diversidade do oceano. Cada item que 
            ela escolhia era uma obra de arte, com detalhes inspirados em conchas, estrelas-do-mar e peixes coloridos.</p><br></br>

          <p className="about-text">  À medida que sua empresa se espalhava pela cidade, Marina começou a receber encomendas de amigos e 
            vizinhos para suas criações exclusivas. As crianças que usavam suas roupas se sentiam como pequenos 
            exploradores marinhos, e os pais admiravam a qualidade e o design das peças.</p><br></br>

          <p className="about-text">  Marina percebeu que havia um mercado e decidiu transformar seu hobby em um negócio. Assim, nasceu a 
            Maremansa Kids, uma empresa dedicada a proporcionar às crianças a magia do mar através de roupas e 
            acessórios cuidadosamente confeccionados. Ela alugou um pequeno espaço no centro da cidade e começou a 
            vender em maior escala. </p><br></br>

          <p className="about-text"> Marina per realizado seu sonho de criar uma empresa que não apenas prosperava, mas também fazia a 
            diferença na vida das crianças e no meio ambiente. A Maremansa Kids se tornou um símbolo de amor pelo 
            mar e inspiração para futuros empreendedores que acreditavam que seus sonhos poderiam ser transformados em
             realidade, desde que fossem guiados por paixão, dedicação e um amor inabalável pela natureza.</p><br></br>
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

export default Company;
