import React from "react";
import "../../styles/Support/Sitemap.css";
import { Link } from "react-router-dom";

let isLoggedIn = false;
const Sitemap = () => {
  const userIconLink = isLoggedIn ? "/requests" : "/login";
  if (localStorage.getItem("user") !== null) {
    localStorage.setItem("loggedIn", "true");
    isLoggedIn = true;
  }

  return (
    <><div className='main'>
      <header className="main-header">
        <div className="logo-about">
        <Link to="/"> <img src="/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons-about">
            <Link to={userIconLink}>
              <i
                className="bx bx-user bt-header animation"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header animation"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
            <Link to="/cart">
              <i
                className="bx bx-cart bt-header animation"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
        </div>
      </header>

      <div className="search-container-about">
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

      <div className="map"><img className='image-map' src="/assets/homeabout.jpeg"/></div>
      <div className="site-map">
        <ul>     
            <li><Link to="/">Home</Link></li> </ul></div>
      <div className="map"><img className='image-map' src="/assets/saleabout.jpeg"/></div>
      <div className="site-map">
        <ul>     
            <li><Link to="/sale">Promoções</Link></li> </ul></div>
      <div className="map"><img className='image-map' src="/assets/props.jpeg"/></div>
      <div className="site-map">
        <ul>     
            <li><Link to="/props">Acessórios</Link></li> </ul></div>
      <div className="map"><img className='image-map' src="/assets/fem.jpeg"/></div>
      <div className="site-map">
      <ul>     
            <li><Link to="/female">Feminino</Link>
                <ul>
                    <li className="sub-list"><Link to="/female/fem-baby">Baby</Link></li>
                    <li className="sub-list"><Link to="/female/fem-children">Infantil</Link></li>
                    <li className="sub-list"><Link to="/female/fem-juvenile">Juvenil</Link></li>
                </ul>
            </li> </ul> </div>
      <div className="map"><img className='image-map' src="/assets/maleabout.jpeg"/></div>
      <div className="site-map">
        <ul>  
      <li><Link to="/male">Masculino</Link>
                <ul>
                    <li className="sub-list"><Link to="/male/male-baby">Baby</Link></li>
                    <li className="sub-list"><Link to="/male/male-children">Infantil</Link></li>
                    <li className="sub-list"><Link to="/male/male-juvenile">Juvenil</Link></li>
                </ul>
            </li> </ul> </div>

            </div>

            <footer>
        <section className="footer-section">
          <div className="footer-section-div">
        <Link to="/"><img className="rotating-jumping-image" src="/assets/whale.png" /></Link>
          </div>

          <div className="footer-section-div">
            <h3 className='footer-animation-title'>SOBRE NÓS</h3>
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
            <h3 className='footer-animation-title'>SUPORTE</h3>
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
  <h3 className='footer-animation-title'>CONTATOS</h3>
  <a href="https://web.whatsapp.com/send?phone=5585986056136" target="_blank" title="whatsapp">
    <i className="fa fa-whatsapp"></i>
  </a>
  <a href="https://www.facebook.com/maremansakidss" target="_blank" title="facebook">
    <i className="fa fa-facebook"></i>
  </a>
  <a href="https://www.instagram.com/maremansakids/" target="_blank" title="instagram">
    <i className="fa fa-instagram"></i>
  </a>
</div>
        </section>
      </footer>
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
</>
  );
};

export default Sitemap;