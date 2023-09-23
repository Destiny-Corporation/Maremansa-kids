import React from "react";
import "../../styles/About/Company.css";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="main">
    <header className="main-header">
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"/>
          <button className="search-button" type="submit">
            <i className="bx bx-search"></i>
          </button>
      </div>
        <div className="logo">
        <Link to="/"> <img src="src/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons">
          <a>
            <Link to="/login">
              <i
                className="bx bx-user bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
          <a>
            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
          <a>
            <Link to="/cart">
              <i
                className="bx bx-cart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
        </div>
      </header>


      <div className= "title">
       <h4>MareMansa Kids | A Empresa</h4>
      </div>
  
      <hr size="1" />

      <div className="about">
    <div classname="empresa">
      <img src="src/assets/empresa.png" />
    </div>
  </div>

        <hr size="1" />


      <div className="history">
        <div className="maremansa">
          <h3>História</h3><br></br>
          <p> Há muitos anos, em cidade litorânea chamada Fortaleza, vivia uma mulher chamada Marina. Marina tinha um sonho: criar uma empresa que oferecesse roupas e acessórios de alta qualidade para crianças, inspirados no encanto do mar e na natureza exuberante que cercava sua cidade natal.</p><br></br>
        
          <p>  Com determinação e um grande amor pelo comércio, Marina começou a comercializar peças para crianças. Ela pesquisava materiais de alta qualidade que refletiam a beleza e a diversidade do oceano. Cada item que ela escolhia era uma obra de arte, com detalhes inspirados em conchas, estrelas-do-mar e peixes coloridos.</p><br></br>

          <p>  À medida que sua empresa se espalhava pela cidade, Marina começou a receber encomendas de amigos e vizinhos para suas criações exclusivas. As crianças que usavam suas roupas se sentiam como pequenos exploradores marinhos, e os pais admiravam a qualidade e o design das peças.</p><br></br>

          <p>  Marina percebeu que havia um mercado e decidiu transformar seu hobby em um negócio. Assim, nasceu a Maremansa Kids, uma empresa dedicada a proporcionar às crianças a magia do mar através de roupas e acessórios cuidadosamente confeccionados. Ela alugou um pequeno espaço no centro da cidade e começou a vender em maior escala. </p><br></br>

          <p> Marina per realizado seu sonho de criar uma empresa que não apenas prosperava, mas também fazia a diferença na vida das crianças e no meio ambiente. A Maremansa Kids se tornou um símbolo de amor pelo mar e inspiração para futuros empreendedores que acreditavam que seus sonhos poderiam ser transformados em realidade, desde que fossem guiados por paixão, dedicação e um amor inabalável pela natureza.</p><br></br>
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
    </div>
  );
};

export default Company;
