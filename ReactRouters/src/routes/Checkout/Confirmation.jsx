import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import "../../styles/Confirmation.css"


const Confirmation = () => {
  return (
    <> <div className="main">
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
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="header-logo-center"
          />
        </Link>
      </div>
      <div className="icons">
        <Link to="/requests">
          <i className="bx bx-user bt-header" style={{ color: "#ffffff" }}></i>
        </Link>
        <Link to="/wishlist">
          <i
            className="bx bx-heart bt-header"
            style={{ color: "#ffffff" }}
          ></i>
        </Link>
        <Link to="/cart">
          <i className="bx bx-cart bt-header" style={{ color: "#ffffff" }}></i>
        </Link>
      </div>
    </header>

    <div className="container-subheader">
        <div className="container-wishlist">
          <i className="bx bx-card bt-header"></i>
          <h6>| Pagamento Realizado</h6>
        </div>
      </div>

    <Box
      className="confirmation-container"
    >
      <Alert
        severity="success"
        className="confirmation-box"
      >
        <CheckCircleIcon className="success-icon" />
        <Typography variant="h5" className="success-message">
          Pedido realizado com sucesso!
        </Typography>
        <Typography className="order-details">
          Obrigado pela sua compra. Um e-mail de
          confirmação foi enviado para o seu endereço.
        </Typography>
        <Button
          variant="contained"
          className="continue-shopping-button"
          component={Link}
          to="/"
        >
          Continue comprando
        </Button>
      </Alert>
    </Box>
    
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
</div> 
</>
  );
};



export default Confirmation;
