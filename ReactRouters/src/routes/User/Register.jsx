import React, { useState } from 'react';
import "../../styles/User/Register.css";
import { Route } from "react-router-dom";
import { Link} from 'react-router-dom'; 
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getFirestore, doc, getDoc } from "firebase/firestore";
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

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestore = getFirestore(app);

const auth = getAuth(app); 
const database = getDatabase(app);
const analytics = getAnalytics(app);

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
 
  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        setConfirmPasswordError('*As senhas não coincidem!');
        setPasswordError('');
        setEmailError('');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      await set(ref(database, `users/${user.uid}`), {
        email: user.email,
      });

      window.location.href = '/login';
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/invalid-email') {
        setEmailError('*E-mail inválido!');
        setConfirmPasswordError('');
        setPasswordError('');
      } else if (error.code === 'auth/weak-password') {
        setPasswordError('*Senha fraca, tente uma senha mais forte!');
        setEmailError('');
      } else if (error.code === 'auth/email-already-in-use') {
        setEmailError('*Esse e-mail já está em uso!');
        setConfirmPasswordError('');
        setPasswordError('');
      } else {
        setRegistrationError('*Houve algum erro durante o registro!');
        setEmailError('');
        setConfirmPasswordError('');
        setPasswordError('');
      }
    }
  };

  return (
    <>
      <header className="main-header">
        <div className="logo-about">
        <Link to="/"> <img src="/assets/logo.png" alt="Logo" /> </Link>
        </div>
        <div className="icons-about">
          <a href="#">
            <Link to="/login">
              <i className="bx bx-user bt-header" style={{ color: "#ffffff" }}></i>
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
            src="/assets/logo2.png"
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
{emailError && <div className="error">{emailError}</div>} { }

<div className="input-box">
  <input
    type="password"
    placeholder="SENHA"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <i className="bx bx-lock-alt"></i>
</div>
{passwordError && <div className="error">{passwordError}</div>} { }

<div className="input-box">
  <input
    type="password"
    placeholder="CONFIRMAR SENHA"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
  <i className="bx bx-lock-alt"></i>
</div>
{confirmPasswordError && <div className="error">{confirmPasswordError}</div>} { }

<button id="btnn" type="button" onClick={handleRegister} className="btn">
  CRIAR CONTA
</button>

{registrationError && <div className="error">{registrationError}</div>} { }

          <div className="register-link">
            <p>
              Já tem uma conta? <a href="#"><Link to="/login">ENTRAR</Link></a>
            </p>
          </div>
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
            <i className="fa fa-whatsapp"></i>
            <i className="fa fa-google"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </section>
      </footer>
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
    </>
  );
};

export default Register;
