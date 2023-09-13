import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
    toggleButtonsDisable();
    toggleEmailErrors();
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    toggleButtonsDisable();
    togglePasswordErrors();
  }

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Redirecione para a página inicial após o login bem-sucedido
        window.location.href = "/";
      })
      .catch((error) => {
        alert(getErrorMessage(error));
      });
  }

  function recoverPassword() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Email enviado com sucesso");
      })
      .catch((error) => {
        alert(getErrorMessage(error));
      });
  }

  //function register() {
    //window.location.href = "Register/register.html";
  //}

  /*function recoverPassword() {
    firebaseApp
      .auth()
      .sendPasswordResetEmail(form.email().value)
      .then(() => {
        alert("Email enviado com sucesso");
      })
      .catch((error) => {
        alert(getErrorMessage(error));
      });
  }*/

  function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
      return "Usuário nao encontrado";
    }
    if (error.code == "auth/wrong-password") {
      return "Senha inválida";
    }
    return error.message;
  }

  function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email)
      ? "none"
      : "block";
  }

  function togglePasswordErrors() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
  }

  function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
  }

  function isEmailValid() {
    const email = form.email().value;
    if (!email) {
      return false;
    }
    return validateEmail(email);
  }

  function isPasswordValid() {
    return form.password().value ? true : false;
  }

  const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () =>
      document.getElementById("password-required-error"),
    recoverPasswordButton: () =>
      document.getElementById("recover-password-button"),
  };
  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  return (
    <>
      <header className="main-header">
        <div className="logo">
          <img src="src/assets/logo.png" alt="Logo" />
        </div>
        <div className="icons">
          <a href="#">
            <i
              className="bx bx-user bt-header"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a href="#">
            <i
              className="bx bx-heart bt-header"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a href="#">
            <i
              className="bx bx-cart bt-header"
              style={{ color: "#ffffff" }}
            ></i>
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
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="EMAIL"
              id="email"
              name="email"
              onChange={onChangeEmail}
              
            />
            <div className="error" id="email-required-error">
              Email é obrigatório
            </div>
            <div className="error" id="email-invalid-error">
              Email é inválido
            </div>
            <i className="bx bx-user" style={{color:'#ffffff'}}></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="PASSWORD"
              id="password"
              name="password"
              onChange={onChangePassword}
            />
            <div className="error" id="password-required-error">
              Senha é obrigatória
            </div>
            <i className="bx bx-lock-alt" style={{ color: "#ffffff" }}></i>
          </div>

          <div className="remember-forgot">
            <label>
              <input className="checkbox" type="checkbox" /> LEMBRAR DE MIM{" "}
            </label>
            <a
              className="remember-link"
              href="#"
              id="recover-password-button"
              onClick={recoverPassword}
            >
              ESQUECI MINHA SENHA.
            </a>
          </div>

          <button type="button" className="btn" id="login-button" onClick={login}>
            ENTRAR
          </button>

          <div className="register-link">
            <p>
              {" "}
              Não possui cadastro? <Link to="/register">CRIAR CONTA</Link>
            </p>
          </div>
        </form>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <img src="src/assets/prancha.png" alt="Sobre Nós" className="icon-image" />
            <a className="footer-link" href="#">
              SOBRE NÓS
            </a>
          </div>
          <div className="footer-right">
            <div className="contacts">
              <p>CONTATOS</p>
              <div className="social-icons">
                <a href="#">
                  <i
                    className="bx bxl-gmail bt-social"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="bx bxl-instagram bt-social"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="bx bxl-pinterest-alt bt-social"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
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

export default Login;
