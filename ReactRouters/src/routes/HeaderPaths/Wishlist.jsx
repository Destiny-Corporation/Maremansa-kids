import React, { useState } from "react";
import "../../styles/HeaderPaths/Wishlist.css";
import { Link } from "react-router-dom";

const Wishlist = () => {
  let isLoggedIn = false;

  if (localStorage.getItem("user") !== null) {
    localStorage.setItem("loggedIn", "true");
    isLoggedIn = true;
  }

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [favoriteItems, setFavoriteItems] = useState(
    JSON.parse(localStorage.getItem("favoriteItems")) || []
  );
  const handleRemoveFromFavorites = (index) => {
    const updatedFavoriteItems = [...favoriteItems];
    updatedFavoriteItems.splice(index, 1);
    setFavoriteItems(updatedFavoriteItems);
    localStorage.setItem(
      "favoriteItems",
      JSON.stringify(updatedFavoriteItems)
    );
  };

  return (
    <>
    <div className="main">
       <header className="main-header">
        <div className="search-container-header">
          <input
            type="text"
            className="search-bar-header"
            placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"
          />
          <button className="search-button-header" type="submit">
            <i className="bx bx-search"></i>
          </button>
        </div>
        <div className="header-logo-center">
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="header-logo-center"
            />
          </Link>
        </div>
        <div className="icons-w">
          <Link to="/requests">
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

      <div className="container-subheader">
        <div className="container-wishlist">
          <i className="bx bx-heart bt-header"></i>
          <h6>| Lista de Desejos ({favoriteItems.length})</h6>
        </div>
      </div>

      <div className="wishlist-items,three-columns">
      <div className="wishlist-content">
        {isLoggedIn ? (
          <div className="wishlist-items">
            {favoriteItems.length > 0 ? (
              favoriteItems.map((produto, index) => (
                <div className="wishlist-item" key={index}>
                  <div className="wish-content">
                    <div className="wish-item" key={index}>
                      <div className="wish-item-info">
                        <div className="delivery-indicator">
                          Favorito {index + 1} de {favoriteItems.length}
                        </div>
                        <div className='infos-prod'>
                        <img
                          src={produto.url_image}
                          alt={produto.nome_prop}
                          className="wish-item-image"
                        />
                        <div className="wish-item-details">
                        <div className="wish-item-name">
                     {produto.nome_prodmale ||
                      produto.nome_prop ||
                      produto.nome_prodpromo ||
                      produto.nome_prodfemme}
                      </div>
                          <div className="wish-item-price">
                            Valor: R$ {produto.preço}
                          </div>
                          <hr className="hpaths"></hr>
                         <div className="cart-item-options">
                            <div>
                              <strong className="wish-det">Cor: {produto.cor} </strong> 
                            </div>
                            <div>
                              <strong className="wish-det">Tamanho: {produto.tamanho} </strong> 
                            </div>
                            <div>
                              <strong className="wish-det">Quantidade: {produto.quantidade} </strong> 
                            </div> <br></br>
                            <i
                          className="bx bxs-trash-alt cart-remove cart-item-remove-2 animation"
                          onClick={() => handleRemoveFromFavorites(index)}
                        ></i>
                          </div> 
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-wishlist">
                <img
                  src="/assets/empty-wishlist.png"
                  alt="Lista de Desejos Vazia"
                />
                <div className="effect">
                <Link to="/"><div className="button">
                    <img
                      src="/assets/shopping-button.png"
                      alt="Ir às Compras"
                    />
                  </div></Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="login-message">
            <div className="empty-wishlist">
              <Link to="/login">
                <img
                  src="/assets/empty-wishlist-login.png"
                  alt="Lista de Desejos Vazia"
                />
              </Link>
              <div className="effect">
                <div className="button">
                  <img src="/assets/login.png" alt="Ir às Compras" />
                </div>
              </div>
            </div>
          </div>
        )}

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

export default Wishlist;
