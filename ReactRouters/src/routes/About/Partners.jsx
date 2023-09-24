import React from "react";
import "../../styles/About/Partners.css";
import { Link } from "react-router-dom";

const Partners = () => {
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
       <h4>MareMansa Kids | Nossos Parceiros</h4>
      </div>
  
      <hr size="1" />

      <div className="about">
    <div classname="company">
      <img src="src/assets/company.png" />
    </div>
  </div>

        <hr size="1" />


      <div className="history">
        <div className="maremansa">
          <h5>Nossos Valiosos Parceiros: Juntos, Criando Experiências Inesquecíveis.</h5><br></br>
            <p>Na MareMansa Kids, acreditamos que o sucesso é construído em parceria. Estamos orgulhosos de contar com uma rede de parceiros incríveis que desempenham um papel fundamental em nossa jornada para proporcionar a você, nosso cliente querido, experiências de compras excepcionais.</p><br></br>
            
            <h6>1. Fornecedores de Qualidade:</h6>
            <p>• Trabalhamos lado a lado com fornecedores cuidadosamente selecionados que compartilham nossa paixão pela qualidade. Eles fornecem os melhores materiais e produtos, garantindo que cada item em nossa loja atenda aos mais altos padrões.</p><br></br>
            
            <h6>2. Transportadoras Confiáveis:</h6>
            <p>• Nossos parceiros de transporte desempenham um papel crucial em garantir que seus pedidos cheguem até você com segurança e no prazo. Eles compartilham nosso compromisso com entregas rápidas e confiáveis.</p><br></br>

            <h6>3. Especialistas em Tecnologia:</h6>
            <p>• Trabalhamos com especialistas em tecnologia que nos ajudam a manter nossa loja online eficiente, segura e fácil de usar. Eles nos permitem oferecer uma experiência de compra perfeita.</p><br></br>

            <h6>4. Colaborações Criativas:</h6>
            <p>Colaboramos com designers, artistas e criativos talentosos para trazer coleções exclusivas e edições limitadas que refletem nossa visão de estilo e inovação.</p><br></br>

            <h6>5. Feedback dos Clientes:</h6>
            <p>• Nossos clientes são nossos parceiros mais valiosos. Valorizamos seu feedback e suas opiniões, que nos orientam na melhoria contínua de nossos produtos e serviços.</p><br></br>

            <p>Juntos, nossos parceiros desempenham um papel vital em tornar a MareMansa Kids o destino de escolha para compras online. Cada parceria é construída com base em confiança, integridade e um compromisso com a satisfação do cliente.</p><br></br>
            
            <p>Agradecemos a todos os nossos parceiros por sua dedicação e contribuição para o nosso sucesso contínuo. Juntos, continuaremos a criar experiências de compras inesquecíveis para você, nosso cliente valioso. Obrigado por fazer parte dessa jornada conosco.</p><br></br>
            
            <p>Se você estiver interessado em colaborar conosco ou tiver alguma sugestão de parceria, entre em contato conosco em [Endereço de E-mail de Contato]. Estamos sempre abertos a novas oportunidades e ideias inovadoras.</p><br></br>

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
    </div>
  );
};

export default Partners;
