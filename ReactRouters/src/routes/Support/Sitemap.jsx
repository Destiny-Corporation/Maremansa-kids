import React from "react";
import "../../styles/Support/Sitemap.css";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className='main'>
      <header className="main-header">
        <div className="logo">
          <img src="src/assets/logo.png" alt="Logo" />
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
                src="src/assets/banner.png"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="src/assets/banner.png"
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
      <h1 className="general-title">MAPA DO SITE</h1>
      <hr className="hr-sections"></hr>
      </div>

      <p className="map-text">Reunimos aqui todas as novidades e tendências que a Maremansa Kids tem para você.
             Encontre tudo em moda praia feminina e masculina que vai do infantil ao teen. Além de acessórios que farão um 
             complemento fabuloso aos lookinhos de verão do seu pequeno. Confira!</p>

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

      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
    </div>
  );
};

export default Sitemap;