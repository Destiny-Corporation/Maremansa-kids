import React from "react";
import "../../styles/ProductTypes/Sale.css";
import { Link } from "react-router-dom";

const Sale = () => {
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

      <div className="search-container">
        <input type="text" className="search-bar" placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"/>
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
      <h1 className="general-title">PROMOÇÕES</h1>
      <hr className="hr-sections"></hr>
      </div>
      
      <div className="container-clothes">
        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-1.png" alt="" />
            <h6 className="text-card">PRODUTO 1</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-2.png" alt="" />
            <h6 className="text-card">PRODUTO 2</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-3.png" alt="" />
            <h6 className="text-card">PRODUTO 3</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-4.png" alt="" />
            <h6 className="text-card">PRODUTO 4</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>
      </div>

      <div className="container-clothes">
      <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-1.png" alt="" />
            <h6 className="text-card">PRODUTO 5</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-2.png" alt="" />
            <h6 className="text-card">PRODUTO 6</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-3.png" alt="" />
            <h6 className="text-card">PRODUTO 7</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-4.png" alt="" />
            <h6 className="text-card">PRODUTO 8</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>
      </div>

      <div className="container-clothes">
        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-1.png" alt="" />
          </Link>
          <Link to="/product">
            <h6 className="text-card">PRDOUTO 9</h6>
          </Link>
          <h8 className="text-card">R$ 37,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-2.png" alt="" />
            <h6 className="text-card">PRODUTO 10</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-3.png" alt="" />
            <h6 className="text-card">PRODUTO 11</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-4.png" alt="" />
            <h6 className="text-card">PRODUTO 12</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>
      </div>

      <div className="container-clothes">
        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-1.png" alt="" />
          </Link>
          <Link to="/product">
            <h6 className="text-card">PRODUTO 13</h6>
          </Link>
          <h8 className="text-card">R$ 37,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-2.png" alt="" />
            <h6 className="text-card">PRODUTO 14</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-3.png" alt="" />
            <h6 className="text-card">PRODUTO 15</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-4.png" alt="" />
            <h6 className="text-card">PRODUTO 16</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>
      </div>

      <div className="container-clothes">
        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-1.png" alt="" />
          </Link>
          <Link to="/product">
            <h6 className="text-card">PRODUTO 17</h6>
          </Link>
          <h8 className="text-card">R$ 37,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-2.png" alt="" />
            <h6 className="text-card">PRODUTO 18</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-3.png" alt="" />
            <h6 className="text-card">PRODUTO 19</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
        </div>

        <div className="clothes">
          <Link to="/product">
            <img src="src/assets/model-4.png" alt="" />
            <h6 className="text-card">PRODUTO 20</h6>
          </Link>
          <h8 className="text-card">R$ 59,90</h8>
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
    </div>
  );
};

export default Sale;


/*const Props = () => {
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

      <div className="title-section">
      <h1 className="general-title">PROMOÇÕES</h1>
      <hr className="hr-sections"></hr>
      </div>
      
      <div className="product-grid">
        <div className="product">
            <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 1</div>
            <div className="product-price">R$19.99</div>
        </div>

        <div className="product">
            <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 2</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 3</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 4</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 5</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 6</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 7</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 8</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 9</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 10</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 11</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 12</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 13</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 14</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 15</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 16</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 17</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 18</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 19</div>
            <div className="product-price">R$24.99</div>
        </div>

        <div className="product">
        <img src="src/assets/modelo_1.png" alt="" />
            <div className="product-name">Produto 20</div>
            <div className="product-price">R$24.99</div>
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
    </div>
  );
};

export default Props;*/
