import React from "react";
import "./Login.css";
import { Route } from "react-router-dom";

const Login = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDTKUI6nV-DZjIsUo1BMkjIUWOQbT9gU3Q",
    authDomain: "auth-amanda.firebaseapp.com",
    projectId: "auth-amanda",
    storageBucket: "auth-amanda.appspot.com",
    messagingSenderId: "376069750475",
    appId: "1:376069750475:web:bfb216cfd8928a23e8a54e",
  };
  firebase.initializeApp(firebaseConfig);
  function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
  }

  function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
  }

  function login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email().value, form.password().value)
      .then(() => {
        window.location.href = "Home/home.html";
      })
      .catch((error) => {
        alert(getErrorMessage(error));
      });
  }

  function register() {
    window.location.href = "Register/register.html";
  }

  function recoverPassword() {
    firebase
      .auth()
      .sendPasswordResetEmail(form.email().value)
      .then(() => {
        alert("Email enviado com sucesso");
      })
      .catch((error) => {
        alert(getErrorMessage(error));
      });
  }

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
    <div>
      <header className="main-header">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div classNamw="icons">
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
            src="/images/logo2.png"
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
              onchange="onChangeEmail()"
            />
            <div className="error" id="email-required-error">
              Email é obrigatório
            </div>
            <div className="error" id="email-invalid-error">
              Email é inválido
            </div>
            <i className="bx bx-user" style="color:#ffffff"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="PASSWORD"
              id="password"
              name="password"
              onchange="onChangePassword()"
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
              onclick="recoverPassword()"
            >
              ESQUECI MINHA SENHA.
            </a>
          </div>

          <button type="button" class="btn" id="login-button" onclick="login()">
            ENTRAR
          </button>

          <div className="register-link">
            <p>
              {" "}
              Não possui cadastro? <a href="#">CRIAR CONTA</a>
            </p>
          </div>
        </form>
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <img src="/images/prancha.png" alt="Sobre Nós" class="icon-image" />
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
    </div>
  );
};

export default Login;
