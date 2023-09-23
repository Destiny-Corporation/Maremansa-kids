import React from "react";
import "../../styles/ProductTypes/Props.css";
import { Link } from "react-router-dom";

const Props = () => {
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
      <h1 className="general-title">ACESSÓRIOS</h1>
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
            <img src="src/assets/baleia.png" />
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

export default Props;
