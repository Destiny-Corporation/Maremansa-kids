import React, { useState } from 'react';
import "../../styles/User/Register.css";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDTKUI6nV-DZjIsUo1BMkjIUWOQbT9gU3Q",
  authDomain: "auth-amanda.firebaseapp.com",
  projectId: "auth-amanda",
  storageBucket: "auth-amanda.appspot.com",
  messagingSenderId: "376069750475",
  appId: "1:376069750475:web:bfb216cfd8928a23e8a54e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Variável `auth` declarada aqui
const database = getDatabase(app);
const analytics = getAnalytics(app);

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Crie uma conta de usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Após o registro, você pode salvar informações adicionais no Firebase Realtime Database
      const user = userCredential.user;
      await set(ref(database, `users/${user.uid}`), {
        email: user.email,
        // Outros dados do usuário, se necessário
      });

      alert('Registro bem-sucedido!');
    } catch (error) {
      console.error(error);
      alert('Erro durante o registro');
    }
  };
  

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

      <div className="wrapper">
        <form action="">
          <img
            src="src/assets/logo2.png"
            alt="Logo de Login"
            className="login-image"
          />
          <h1>Cadastre-se</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bx-user"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="SENHA"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bx-lock-alt"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="CONFIRME SUA SENHA" required />
            <i className="bx bx-lock-alt"></i>
          </div>

          <button id="btnn" type="button" onClick={handleRegister} className="btn">
            CRIAR CONTA
          </button>

          <div className="register-link">
            <p>
              Já tem uma conta? <a href="#"><Link to="/login">ENTRAR</Link></a>
            </p>
          </div>
        </form>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <img
              src="src/assets/prancha.png"
              alt="Sobre Nós"
              className="icon-image"
            />
            <a className="footer-link" href="#">
              SOBRE NÓS
            </a>
          </div>
          <div className="footer-right">
            <div className="contacts">
              <p className="p-contacts">CONTATOS</p>
              <div className="social-icons">
                <a href="#"></a>
                <i
                  className="bx bxl-gmail bt-social"
                  style={{ color: "#ffffff" }}
                ></i>
                <a href="#"></a>
                <i
                  className="bx bxl-instagram bt-social"
                  style={{ color: "#ffffff" }}
                ></i>
                <a href="#"></a>
                <i
                  className="bx bxl-pinterest-alt bt-social"
                  style={{ color: "#ffffff" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="sub-footer">
        <p>maremansa</p>
      </div>
    </>
  );
};

export default Register;
