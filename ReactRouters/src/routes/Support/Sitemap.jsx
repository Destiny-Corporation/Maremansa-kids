import React from "react";
import "../../styles/Support/Sitemap.css";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className='main'>
      <header className="main-header">
        <div className="logo">
        <Link to="/"> <img src="/assets/logo.png" alt="Logo" /> </Link>
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
                src="/assets/banner.png"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="/assets/banner-sale.png"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="/assets/banner-sale-2.png"
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
      <h1 className="general-title">MAREMANSA | MAPA DO SITE</h1>
      <hr className="hr-sections"></hr>
      </div>

      <div className="about">
    <div className="company">
      <img src="/assets/banner-maremansa.png" />
    </div>
  </div>

  <hr className="hr-sections"></hr>

  <div className="history">
      <h3 className="general-title-h3">O QUE VOCÊ VAI ENCONTRAR?</h3><br></br>
      <p className="about-text">Apresentamos a você todas as últimas novidades e tendências da Maremansa Kids, 
      onde você encontrará uma ampla seleção de moda praia tanto para meninas quanto para meninos, abrangendo desde 
      o infantil até o teen. Além disso, oferecemos uma variedade de acessórios fabulosos para complementar os trajes 
      de verão dos seus pequenos. Não deixe de conferir as opções incríveis que temos para você!</p></div>

    <div className="site-map">
        <ul>     
            <li><Link to="/">Home</Link></li>
            <li><Link to="/female">Feminino</Link>
                <ul>
                    <li className="sub-list"><Link to="/">Baby</Link></li>
                    <li className="sub-list"><Link to="/">Infantil</Link></li>
                    <li className="sub-list"><Link to="/">Juvenil</Link></li>
                </ul>
            </li>
            <li><Link to="/male">Masculino</Link>
                <ul>
                    <li className="sub-list"><Link to="/">Baby</Link></li>
                    <li className="sub-list"><Link to="/">Infantil</Link></li>
                    <li className="sub-list"><Link to="/">Juvenil</Link></li>
                </ul>
            </li>
            <li><Link to="/sale">Promoções</Link></li>
            <li><Link to="/props">Acessórios</Link></li>
        </ul>
    </div>


      <footer style={{position: "static" }}>
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

export default Sitemap;