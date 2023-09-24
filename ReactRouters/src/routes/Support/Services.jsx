import React from "react";
import "../../styles/Support/Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="main">
    <header className="main-header">
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
       <h4>MareMansa Kids | Atendimento</h4>
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
          <h3>Querido Cliente,</h3><br></br>
          <p> Estamos sempre aqui para atendê-lo da melhor maneira possível e tornar sua experiência de compra conosco incrível. Se você tiver alguma dúvida, precisar de assistência ou quiser simplesmente bater um papo sobre nossos produtos, estamos à disposição!</p><br></br>
        
          <p> Instagram: Nosso perfil no Instagram é um lugar onde você pode encontrar as últimas novidades, inspirações de moda e muito mais. Além disso, você pode nos enviar uma mensagem direta (DM) a qualquer momento. Siga-nos em <Link to="https://instagram.com/maremansakids?igshid=MzRlODBiNWFlZA==">@MaremansaKids</Link> e fique por dentro de tudo o que está acontecendo.</p><br></br>

          <p>  WhatsApp: Para uma comunicação mais direta e instantânea, estamos disponíveis no WhatsApp. Basta adicionar nosso número, [inserir o número de telefone aqui], à sua lista de contatos e enviar uma mensagem. Estamos prontos para responder às suas perguntas e auxiliá-lo com suas necessidades. </p><br></br>

          <p> Queremos tornar sua jornada de compras conosco o mais simples e agradável possível. Não hesite em nos contatar a qualquer momento. Sua satisfação é nossa prioridade. </p><br></br>

          <p> Agradecemos por escolher a Maremansa Kids e aguardamos ansiosamente o seu contato!</p><br></br>

          <p> Atenciosamente,</p><br></br>

          <p> A Equipe Maremansa Kids.</p><br></br>
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

export default Services;
