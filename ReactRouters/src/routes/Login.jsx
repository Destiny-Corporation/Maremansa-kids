import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <header class="main-header">
        <div class="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div class="icons">
          <a href="#"></a>
          <i class="bx bx-user bt-header" style={{ color: "#ffffff" }}></i>
          <a href="#"></a>
          <i class="bx bx-heart bt-header" style={{ color: "#ffffff" }}></i>
          <a href="#"></a>
          <i class="bx bx-cart bt-header" style={{ color: "#ffffff" }}></i>
        </div>
      </header>

      <div class="wrapper">
        <form action="">
          <img
            src="/images/logo2.png"
            alt="Logo de Login"
            class="login-image"
          />
          <h1>Login</h1>
          <div class="input-box">
            <input type="text" placeholder="EMAIL" required />
            <i class="bx bx-user" style={{ color: "#ffffff" }}></i>
          </div>

          <div class="input-box">
            <input type="password" placeholder="PASSWORD" required />
            <i class="bx bx-lock-alt" style={{ color: "#ffffff" }}></i>
          </div>

          <div class="remember-forgot">
            <label>
              <input class="checkbox" type="checkbox" /> LEMBRAR DE MIM{" "}
            </label>
            <a class="remember-link" href="#">
              ESQUECI MINHA SENHA.
            </a>
          </div>

          <button type="submit" class="btn">
            ENTRAR
          </button>

          <div class="register-link">
            <p>
              {" "}
              Não possui cadastro? <a href="#">CRIAR CONTA</a>
            </p>
          </div>
        </form>
      </div>

      <footer>
        <div class="footer-content">
          <div class="footer-left">
            <img src="/images/prancha.png" alt="Sobre Nós" class="icon-image" />
            <a class="footer-link" href="#">
              SOBRE NÓS
            </a>
          </div>
          <div class="footer-right">
            <div class="contacts">
              <p class="p-contacts">CONTATOS</p>
              <div class="social-icons">
                <a href="#"></a>
                <i
                  class="bx bxl-gmail bt-social"
                  style={{ color: "#ffffff" }}
                ></i>
                <a href="#"></a>
                <i
                  class="bx bxl-instagram bt-social"
                  style={{ color: "#ffffff" }}
                ></i>
                <a href="#"></a>
                <i
                  class="bx bxl-pinterest-alt bt-social"
                  style={{ color: "#ffffff" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="sub-footer">
        <p>maremansa</p>
      </div>
    </div>
  );
};

export default Login;
