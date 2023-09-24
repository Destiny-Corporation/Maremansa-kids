import React from "react";
import "../../styles/About/PhysicalStore.css";
import { Link } from "react-router-dom";

const PhysicalStore = () => {
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
      <div className= "title">
       <h4>MareMansa Kids | Loja Física</h4>
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
          <h5>Visite Nossa Loja Física e Conheça o Encanto em Pessoa!</h5><br></br>
          <p> Estamos entusiasmados em convidar você a uma experiência única de compra em nossa loja física, onde a magia ganha vida e a qualidade ganha forma. Em [Nome da Loja Online], entendemos o valor do contato direto e da oportunidade de conhecer nossos clientes pessoalmente.</p><br></br>
        
          <h5>Localização:</h5><br></br>
          <p> 📍 Endereço: R. Francisco Glicério, 290 - Maraponga</p>
          <p> ⏰ Horário de Funcionamento: 09:00 às 18:00 </p>
          <p> 📞 Telefone: +55 (85) 98174-0078</p><br></br>

          <p>Nossa loja física é uma extensão do nosso compromisso com produtos de alta qualidade, atendimento excepcional e um ambiente que reflete nossa paixão pelo que fazemos.</p>

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

export default PhysicalStore;
