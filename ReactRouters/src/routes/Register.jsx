import React, { useEffect } from "react";
import "./Register.css";
import { Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push } from "firebase/database";
const Register = () => {
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDrfWXHL4pWdFvTqY04lRXdkdiESv1gxFo",
    authDomain: "registerdev1.firebaseapp.com",
    projectId: "registerdev1",
    storageBucket: "registerdev1.appspot.com",
    messagingSenderId: "657998287997",
    appId: "1:657998287997:web:1170e52ae48fd9d2ca0d14",
    measurementId: "G-6BXVTX23HB",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();

  useEffect(() => {
    var userEmail = document.getElementById("email");
    var userPassword = document.getElementById("password");
    var register = document.getElementById("btnn");

    register.addEventListener("click", function () {
      create(userEmail.value, userPassword.value);
    });

    function create(email, password) {
      var data = {
        email: email,
        password: password,
      };
      const database = getDatabase();
      const databaseRef = ref(database, "users");
      push(databaseRef, data)
        .then(() => {
          console.log("Dados enviados com sucesso.");
        })
        .catch((error) => {
          console.error("Erro ao enviar dados:", error);
        });
    }
  }, []);

  return (
    <div>
      <header className="main-header">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="icons">
          <a href="#"></a>
          <i className="bx bx-user bt-header" style={{ color: "#ffffff" }}></i>
          <a href="#"></a>
          <i className="bx bx-heart bt-header" style={{ color: "#ffffff" }}></i>
          <a href="#"></a>
          <i className="bx bx-cart bt-header" style={{ color: "#ffffff" }}></i>
        </div>
      </header>

      <div className="wrapper">
        <form action="">
          <img
            src="/images/logo2.png"
            alt="Logo de Login"
            className="login-image"
          />
          <h1>Cadastre-se</h1>
          <div className="input-box">
            <input id="email" type="text" placeholder="EMAIL" required />
            <i className="bx bx-user"></i>
          </div>

          <div className="input-box">
            <input id="password" type="password" placeholder="SENHA" required />
            <i className="bx bx-lock-alt"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="CONFIRME SUA SENHA" required />
            <i className="bx bx-lock-alt"></i>
          </div>

          <button id="btnn" type="submit" className="btn">
            CRIAR CONTA
          </button>

          <div className="register-link">
            <p>
              Já tem uma conta?
              <a href="#">ENTRAR</a>
            </p>
          </div>
        </form>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <img
              src="/images/prancha.png"
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
    </div>
  );
};

export default Register;
