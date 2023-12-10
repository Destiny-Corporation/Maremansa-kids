import React, { useState, useEffect } from "react";
import "../../styles/HeaderPaths/Cart2.css";
import { Link, useParams } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  let isLoggedIn = false;
  if (localStorage.getItem("user") !== null) {
    localStorage.setItem("loggedIn", "true");
    isLoggedIn = true;
  }

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
          <div className="container-cart">
            <i className="bx bx-cart bt-header"></i>
            <h6>| Carrinho ({cartItems.length})</h6>
          </div>
        </div>
        {isLoggedIn ? (
          <div className="cart-content">
            {cartItems.map((produto, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-item-info">
                  <div className="delivery-indicator">
                    Entrega {index + 1} de {cartItems.length}
                  </div>
                  <i
                    className="bx bxs-trash-alt cart-remove cart-item-remove-2"
                    onClick={() => handleRemoveFromCart(index)}
                  ></i>
                  <img
                    src={produto.url_image}
                    alt={produto.nome_prop}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <div className="cart-item-name">
                      {produto.nome_prodmale ||
                        produto.nome_prop ||
                        produto.nome_prodpromo ||
                        produto.nome_prodfemme}
                    </div>
                    <div className="cart-item-price">R$ {produto.preço}</div>
                    <div className="cart-item-options">
                      <div>
                        <strong>Cor:</strong> {produto.cor}
                      </div>
                      <div>
                        <strong>Tamanho:</strong> {produto.tamanho}
                      </div>
                      <div>
                        <strong>Quantidade:</strong> {produto.quantidade}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="login-message">
            <div className="empty-cart">
              <img
                src="/assets/empty-cart-login.png"
                alt="Carrinho Vazio"
              />
              <div className="effect">
                <Link to="/login">
                  <div className="button">
                    <img
                      src="/assets/login.png"
                      alt="Botão de Compras"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Botão "Comprar Agora" */}
        {cartItems.length > 0 && (
          <Link to="/checkout">
            <button className="comprar-agora-btn">Comprar Agora</button>
          </Link>
        )}
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
            <i className="fa fa-whatsapp"></i>
            <i className="fa fa-google"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </section>
      </footer>
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
    </>
  );
};

export default Cart;
