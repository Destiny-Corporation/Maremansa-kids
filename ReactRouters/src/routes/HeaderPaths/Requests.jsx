import React, { useState, useEffect } from "react";
import "../../styles/HeaderPaths/Requests.css";
import { Link } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDTKUI6nV-DZjIsUo1BMkjIUWOQbT9gU3Q",
  authDomain: "auth-amanda.firebaseapp.com",
  projectId: "auth-amanda",
  storageBucket: "auth-amanda.appspot.com",
  messagingSenderId: "376069750475",
  appId: "1:376069750475:web:bfb216cfd8928a23e8a54e",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


const Sale = () => {
  const [user, setUser] = useState(null); // Estado do usuário

  // Função para fazer logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Limpa o usuário do estado e do armazenamento local
        setUser(null);
        localStorage.removeItem("user");

        // Redirecione para a página de login ou qualquer outra página desejada
        window.location.href = "/login"; // Por exemplo, redirecione para a página de login
      })
      .catch((error) => {
        console.error("Erro ao fazer logout:", error);
      });
  };

  useEffect(() => {
    // Carregar usuário do armazenamento local ao montar o componente
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
    <header className="main-header">
        <div className="logo">
        <Link to="/"> <img src="src/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons">
          <a href="#">
            <Link to="/login">
              <i
                className="bx bx-user bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
          <a href="#">
            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
          <a href="#">
            <Link to="/cart">
              <i
                className="bx bx-cart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
        </div>
      </header>
      <h1>Meus Pedidos</h1>
      <div className="remember-forgot">
        {"Quer sair? "}
        <button
          className="logout-link"
          onClick={logout}
          style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          SAIR
        </button>
      </div>
      <footer>
        <section className="footer-section">
          <div className="footer-section-div">
            <img src="src/assets/baleia.png" />
          </div>

          <div className="footer-section-div">
            <h3>SOBRE NÓS</h3>
            <li>
              <a href="#">
                <Link to="/company">A EMPRESA</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to="/physicalstore">CONHEÇA NOSSA LOJA FÍSICA</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to="/partners">NOSSOS PARCEIROS</Link>
              </a>
            </li>
          </div>

          <div className="footer-section-div">
            <h3>SUPORTE</h3>
            <li>
              <a href="#">
                <Link to="/services">ATENDIMENTO</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to="/exchanges">TROCAS E DEVOLUÇÕES</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to="/sitemap">MAPA DO SITE</Link>
              </a>
            </li>
          </div>

          <div className="footer-section-div">
            <h3>CONTATOS</h3>
            <a href="#">
              <i className="fa fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fa fa-google"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Sale;
