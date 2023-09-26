import React, { useEffect } from "react";
import "../styles/Protected.css";
import { Link, useNavigate  } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user") !== null;

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirecione para a página de login se o usuário não estiver logado
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    // Retorne null ou qualquer coisa que desejar se o redirecionamento estiver em andamento
    return null;
  }

  return (
    <div className='main'>
      <header className="main-header">
        <div className="logo">
          <img src="src/assets/logo.png" alt="Logo" />
        </div>
        <div className="icons">
          <a href="#">
            <Link to="/requests">
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
            placeholder="O QUE VOCÊ ESTÁ BUSCANDO?" />
          <button className="search-button" type="submit">
            <i className="bx bx-search"></i>
          </button>
        </div><div className="carousel-container">
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
                    src="src/assets/banner-sale.png"
                    className="d-block w-100"
                    alt="..." />
                </div>

                <div className="carousel-item">
                  <img
                    src="src/assets/banner.png"
                    className="d-block w-100"
                    alt="..." />
                </div>

                <div className="carousel-item">
                  <img
                    src="src/assets/banner-sale-2.png"
                    className="d-block w-100"
                    alt="..." />
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
          </div><div className="container-menu-buttons">
            <div className="button-menu">
              <Link to="/sale">
                <img src="src/assets/sale.png" alt="" />
              </Link>
              <Link to="/sale">
                <h6>PROMOÇÕES</h6>
              </Link>
            </div>

            <div className="button-menu">
              <Link to="/props">
                <img src="src/assets/accessories.png" alt="" />
              </Link>
              <Link to="/props">
                <h6>ACESSÓRIOS</h6>
              </Link>
            </div>

            <div className="button-menu">
              <Link to="female">
                <img src="src/assets/female.png" alt="" />
              </Link>
              <Link to="female">
                <h6>FEMININO</h6>
              </Link>
            </div>

            <div className="button-menu">
              <Link to="male">
                <img src="src/assets/male.png" alt="" />
              </Link>
              <Link to="male">
                <h6>MASCULINO</h6>
              </Link>
            </div>
          </div><hr size="1" /><div className="container-clothes">
            <i className="bx bx-chevron-left" style={{ color: "#48A3A9" }}></i>
            <div className="clothes">
              <Link to="/product">
                <img src="src/assets/model-1.png" alt="" />
              </Link>
              <Link to="/product">
                <h6 className="text-card">CONJUNTO MARINHEIRO</h6>
              </Link>
              <h6 className="text-card">POR R$ 37,90</h6>
            </div>

            <div className="clothes">
              <img src="src/assets/model-2.png" alt="" />
              <h6 className="text-card">MAIÔ CANDY</h6>
              <h6 className="text-card">POR R$ 49,90</h6>
            </div>

            <div className="clothes">
              <img src="src/assets/model-3.png" alt="" />
              <h6 className="text-card">CONJUNTO SEREIA</h6>
              <h6 className="text-card">POR R$ 47,90</h6>
            </div>

            <div className="clothes">
              <img src="src/assets/model-4.png" alt="" />
              <h6 className="text-card">CONJUNTO PIRATA</h6>
              <h6 className="text-card">POR R$ 47,90</h6>
            </div>
            <i className="bx bx-chevron-right" style={{ color: "#48A3A9" }}></i>
          </div>
       

      <footer style={{position: "static" }}>
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

export default Protected;
