import React, { useState, useEffect } from "react";
import "../../styles/About/PhysicalStore.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import debounce from 'debounce';

let isLoggedIn = false;

const PhysicalStore = () => {
  const userIconLink = isLoggedIn ? "/requests" : "/login";
  
  if (localStorage.getItem("user") !== null) {
    localStorage.setItem("loggedIn", "true");
    isLoggedIn = true;
  }

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const debouncedSearchFunction = debounce(async () => {
    // Navegue para a rota apropriada com base no valor da pesquisa
    if (["sunga", "menino", "conjunto"].includes(searchValue)) {
      await navigate("/male");
    } else if (["biquini", "biquíni", "conjunto", "vestido", "menina", "maio", "maiô"].includes(searchValue)) {
      await navigate("/female");
    } else if (["boia", "óculos", "oculos","baldinho","chapéu", "chapeu","pulseira"].includes(searchValue)) {
      await navigate("/props");
    } else if (searchValue === "promoções") {
      await navigate("/sale");
    } else if (searchValue === "empresa") {
      await navigate("/about");
    } else if (searchValue === "loja") {
      await navigate("/physicalstore");
    } else if (searchValue === "mapa") {
      await navigate("/sitemap");
    }
  }, 500);

  useEffect(() => {
    // Chame a função debouncedSearchFunction() de forma assíncrona
    debouncedSearchFunction();
  }, [searchValue]);

  
  return (
    <>
    <div className="main">
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
          onChange={(e) => {
            setSearchValue(e.target.value);
          }} 
        />
        <button className="search-button" type="submit">
          <i className="bx bx-search"></i>
        </button>
      </div>

      <div className="title-section">
      <h1 className="general-title">MAREMANSA | LOJA FÍSICA</h1>
      <hr className="hr-sections"></hr>
      </div>

      <div className="about">
    <div className="company">
      <img src="/assets/banner-maremansa.png" />
    </div>
  </div>

  <hr className="hr-sections"></hr>


      <div className="history">
        <div className="maremansa">
          <h3 className="general-subtitle-h3">Visite Nossa Loja Física e conheça de pertinho o nosso trabalho!</h3><br></br>
          <p className='local-p'> Estamos entusiasmados em convidar você a uma experiência única de compra em nossa loja física, onde a magia ganha vida e a qualidade ganha forma. Na MaremansaKids, entendemos o valor do contato direto e da oportunidade de conhecer nossos clientes pessoalmente.</p><br></br>
        
          <div className="local"><img className='local-image' src="/assets/local.png"/></div>
        </div>
      </div>

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

export default PhysicalStore;
