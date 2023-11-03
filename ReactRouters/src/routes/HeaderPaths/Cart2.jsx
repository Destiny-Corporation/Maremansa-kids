import React, { useState, useEffect } from "react";
import "../../styles/HeaderPaths/Cart2.css";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";

const Cart2 = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (localStorage.getItem("user") !== null) {
    localStorage.setItem("loggedIn", "true");
    isLoggedIn = true;
  }

  return (
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
        <div className="logo">
          <Link to="/">
            {" "}
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="header-logo-center"
            />{" "}
          </Link>
        </div>
        <div className="icons">
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

      <div className="cart-content">
        {cartItems.map((produto, index) => (
          <div className="cart-item" key={index}>
            <img
              src={produto.url_image}
              alt={produto.nome_prop}
              className="cart-item-image"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                padding: "10px",
              }}
            />
            <div className="cart-item-details">
              <div className="cart-item-name">{produto.nome_prop}</div>
              <div className="cart-item-price">R$ {produto.preço}</div>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <section className="footer-section">
          <div className="footer-section-div">
            <img src="/assets/whale.png" />
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
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
    </div>
  );
};

export default Cart2;
