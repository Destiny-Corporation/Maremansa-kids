import React, { useState, useEffect } from "react";
import "../../styles/User/Login.css";
import { Link } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTKUI6nV-DZjIsUo1BMkjIUWOQbT9gU3Q",
  authDomain: "auth-amanda.firebaseapp.com",
  projectId: "auth-amanda",
  storageBucket: "auth-amanda.appspot.com",
  messagingSenderId: "376069750475",
  appId: "1:376069750475:web:bfb216cfd8928a23e8a54e",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestore = getFirestore(app);

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const loadLocalStorageUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    loadLocalStorageUser();
  }, []);

  const errorMessages = {
    "auth/user-not-found": "*Usuário não encontrado!",
    "auth/wrong-password": "*Senha inválida!",
    "auth/invalid-email": "*E-mail inválido!",
    "auth/missing-email": '*Preencha o campo de e-mail!',
    "auth/missing-password": '*Preencha o campo de senha!'
  };

  function onChangeEmail(event) {
    setEmail(event.target.value);
    setEmailError(""); 
    toggleButtonsDisable();
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    setPasswordError(""); 
    toggleButtonsDisable();
  }

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
  
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/";
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setPasswordError("*Senha inválida. Tente novamente!");
          setEmailError("");
        } else if (error.code === "auth/too-many-requests") {
          setEmailError("*Houveram muitas tentativas falhas de login! Tente novamente mais tarde.");
          setPasswordError("");
        } else if (error.code === 'auth/missing-email') {
          setEmailError('*Preencha o campo de e-mail!');
          setPasswordError("");
        } else if (error.code === 'auth/missing-password') {
          setPasswordError('*Preencha o campo de senha!');
          setEmailError("");
        } else {
          setEmailError(errorMessages[error.code] || error.message);
          setPasswordError("");
        }
      });
  }
  
  
  function recoverPassword() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("*Enviamos um e-mail para você redefinir sua senha!");
      })
      .catch((error) => {
        setEmailError(errorMessages[error.code] || error.message);
      });
  }

  function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;
  
    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !passwordValid;
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

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));

        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
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
        <div className="logo-about">
        <Link to="/"> <img src="/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons-about">
            <Link to="/login">
              <i
                className="bx bx-user bt-header animation"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header animation"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
            <Link to="/cart">
              <i
                className="bx bx-cart bt-header animation"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
        </div>
      </header>

      <div className="wrapper">
        <form action="">
          <img
            src="/assets/logo2.png"
            alt="Logo de Login"
            className="login-image"
          />
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              onChange={onChangeEmail}
            />
            <i className="bx bx-user" style={{ color: "#ffffff" }}></i>
          </div>
          {emailError && <div className="error">{emailError}</div>} { }

          <div className="input-box">
            <input
              type="password"
              placeholder="PASSWORD"
              name="password"
              onChange={onChangePassword}
            />
            <i className="bx bx-lock-alt" style={{ color: "#ffffff" }}></i>
          </div>
          {passwordError && <div className="error">{passwordError}</div>} { }

          <div className="remember-forgot">
            <label>
              <input className="checkbox" type="checkbox" /> LEMBRAR DE MIM{" "}
            </label>
            <a
              className="remember-link animation"
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
    
        <button type="button" onClick={signInWithGoogle} className="btn-google">
        <i className='bx bxl-google' style={{fontSize: '18px', verticalAlign: 'middle'}}  ></i> ENTRAR COM O GOOGLE
        </button>
        </form>
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
    </>
  );
};

export default Login;