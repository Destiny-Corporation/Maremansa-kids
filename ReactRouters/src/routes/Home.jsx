import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";
import ReactPaginate from "react-paginate";

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

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchProdutos = async () => {
      const produtosCollection = collection(firestore, "Prodfemme");
      const produtosSnapshot = await getDocs(produtosCollection);
      const produtosData = produtosSnapshot.docs.map((doc) => doc.data());
      setProdutos(produtosData);
    };

    fetchProdutos();
  }, []);

  const productsPerPage = 4;
  const pageCount = Math.ceil(produtos.length / productsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = produtos.slice(startIndex, endIndex);
  return (
    <div className="main">
      <header className="main-header">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className="icons">
          <Link to="/requests">
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
          <Link to="/cart2">
            <i
              className="bx bx-cart bt-header"
              style={{ color: "#ffffff" }}
            ></i>
          </Link>
        </div>
      </header>

      <div className="space">
        <div className="search-container-geral">
          <input
            type="text"
            className="search-bar"
            placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"
          />
          <button className="search-button" type="submit">
            <i className="bx bx-search"></i>
          </button>
        </div>

        <div className="carousel-container">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active btc"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/assets/banner-sale.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item">
                <img
                  src="/assets/banner-sale-2.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item">
                <img
                  src="/assets/banner.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="container-menu-buttons">
          <div className="button-menu">
            <Link to="/sale">
              <img src="/assets/sale.png" alt="" />
            </Link>
            <Link to="/sale">
              <h6>PROMOÇÕES</h6>
            </Link>
          </div>

          <div className="button-menu">
            <Link to="/props">
              <img src="/assets/accessories.png" alt="" />
            </Link>
            <Link to="/props">
              <h6>ACESSÓRIOS</h6>
            </Link>
          </div>

          <div className="button-menu">
            <Link to="female">
              <img src="/assets/female.png" alt="" />
            </Link>
            <Link to="female">
              <h6>FEMININO</h6>
            </Link>
          </div>

          <div className="button-menu">
            <Link to="male">
              <img src="/assets/male.png" alt="" />
            </Link>
            <Link to="male">
              <h6>MASCULINO</h6>
            </Link>
          </div>
        </div>

        <hr size="1" />

        <div className="container-clothes-main">
          <i
            className="bx bx-chevron-left"
            style={{ color: "#48A3A9", cursor: "pointer" }}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
          ></i>

          <div className="container-clothes">
            {produtos.slice(startIndex, endIndex).map((produto, index) => (
              <div className="clothes" key={index} style={{ width: "20%" }}>
                <Link to="/product">
                  <img src={produto.url_image} alt={produto.nome_prop} />
                </Link>
                <Link to="/product">
                  <h6 className="text-card">{produto.nome_prop}</h6>
                </Link>
                <h6 className="text-card">R$ {produto.preço}</h6>
              </div>
            ))}
          </div>

          <i
            className="bx bx-chevron-right"
            style={{ color: "#48A3A9", cursor: "pointer" }}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === pageCount - 1}
          ></i>
        </div>
      </div>

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
            <h3>CONTATOS</h3>
            <i className="fa fa-whatsapp"></i>
            <i className="fa fa-google"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </section>
      </footer>
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>
    </div>
  );
};

export default Home;
