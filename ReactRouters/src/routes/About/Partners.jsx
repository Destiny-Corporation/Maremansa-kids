import React from "react";
import "../../styles/About/Partners.css";
import { Link } from "react-router-dom";

const Partners = () => {
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
      <h1 className="general-title">MAREMANSA | NOSSOS PARCEIROS</h1>
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
          <h6 className="general-title-h6">Nossos Valiosos Parceiros: Juntos, Criando Experiências Inesquecíveis.</h6><br></br>
            <p className="about-text">Na MareMansa Kids, acreditamos que o sucesso é construído em parceria. Estamos orgulhosos de contar com uma rede de parceiros incríveis que desempenham um papel fundamental em nossa jornada para proporcionar a você, nosso cliente querido, experiências de compras excepcionais.</p><br></br>
            
            <h6 className="general-title-h6">1 | Fornecedores de Qualidade:</h6>
            <p className="about-text">• Trabalhamos lado a lado com fornecedores cuidadosamente selecionados que compartilham nossa paixão pela qualidade. Eles fornecem os melhores materiais e produtos, garantindo que cada item em nossa loja atenda aos mais altos padrões.</p><br></br>
            
            <h6 className="general-title-h6">2 | Transportadoras Confiáveis:</h6>
            <p className="about-text">• Nossos parceiros de transporte desempenham um papel crucial em garantir que seus pedidos cheguem até você com segurança e no prazo. Eles compartilham nosso compromisso com entregas rápidas e confiáveis.</p><br></br>

            <h6 className="general-title-h6">3 | Especialistas em Tecnologia:</h6>
            <p className="about-text">• Trabalhamos com especialistas em tecnologia que nos ajudam a manter nossa loja online eficiente, segura e fácil de usar. Eles nos permitem oferecer uma experiência de compra perfeita.</p><br></br>

            <h6 className="general-title-h6">4 | Colaborações Criativas:</h6>
            <p className="about-text">Colaboramos com designers, artistas e criativos talentosos para trazer coleções exclusivas e edições limitadas que refletem nossa visão de estilo e inovação.</p><br></br>

            <h6 className="general-title-h6">5 | Feedback dos Clientes:</h6>
            <p className="about-text">• Nossos clientes são nossos parceiros mais valiosos. Valorizamos seu feedback e suas opiniões, que nos orientam na melhoria contínua de nossos produtos e serviços.</p><br></br>

            <p className="about-text">Juntos, nossos parceiros desempenham um papel vital em tornar a MareMansa Kids o destino de escolha para compras online. Cada parceria é construída com base em confiança, integridade e um compromisso com a satisfação do cliente.</p><br></br>
            
            <p className="about-text">Agradecemos a todos os nossos parceiros por sua dedicação e contribuição para o nosso sucesso contínuo. Juntos, continuaremos a criar experiências de compras inesquecíveis para você, nosso cliente valioso. Obrigado por fazer parte dessa jornada conosco.</p><br></br>
            
            <p className="about-text">Se você estiver interessado em colaborar conosco ou tiver alguma sugestão de parceria, entre em contato conosco em [Endereço de E-mail de Contato]. Estamos sempre abertos a novas oportunidades e ideias inovadoras.</p><br></br>

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
              <Link to="#"><i className="fa fa-whatsapp"></i></Link>
              <Link to="#"><i className="fa fa-google"></i></Link>
              <Link to="#"><i className="fa fa-instagram"></i></Link>
          </div>
        </section>
      </footer>
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
    </div>
  );
};

export default Partners;
