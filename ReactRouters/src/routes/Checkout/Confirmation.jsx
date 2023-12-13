import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <Box>
      {/* Header */}
      <div className="main">
     <header className="main-header">
        <div className="logo-about">
        <Link to="/"> <img src="/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons-about">
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

      <div className="container-subheader">
        <div className="container-wishlist">
          <i className="bx bx-card bt-header"></i>
          <h6>| Pagamento Realizado</h6>
        </div>
      </div>

      {/* Conteúdo principal */}
      <Box
        m="auto"
        width="100%"
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Alert
          severity="success"
          style={{
            width: "80%",
            maxWidth: "600px",
            padding: "20px",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 60, color: "#3CA2A2", mb: 2 }} />
          <Typography variant="h5" mb={2}>
            Pedido realizado com sucesso!
          </Typography>
          <Typography>
            Obrigado pela sua compra. Seu pedido foi concluído. Um e-mail de
            confirmação foi enviado para a sua conta.
          </Typography>
          <Button
            variant="contained"
            style={{ marginTop: "20px", backgroundColor: "#3CA2A2", color: "#ffffff" }}
            component={Link}
            to="/"
          >
            Continue comprando
          </Button>
        </Alert>
      </Box>
      </div>

      {/* Footer */}
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
      
      {/* Último texto */}
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
    </Box>
  );
};

export default Confirmation;
