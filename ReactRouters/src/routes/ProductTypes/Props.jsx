import React from "react";
import "../../styles/ProductTypes/Props.css";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
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
const perPage = 12; // Número de produtos por página

const Props = () => {
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchProdutos = async () => {
      const produtosCollection = collection(firestore, "Props");
      const produtosSnapshot = await getDocs(produtosCollection);
      const produtosData = produtosSnapshot.docs.map((doc) => doc.data());
      setProdutos(produtosData);
    };

    fetchProdutos();
  }, []);

  // Cálculos para a paginação
  const pageCount = Math.ceil(produtos.length / perPage);
  const offset = currentPage * perPage;
  const currentPageProdutos = produtos.slice(offset, offset + perPage);
  const prevButtonClass =
    currentPage === 0 ? "prevButton disabled" : "prevButton";
  const nextButtonClass =
    currentPage === pageCount - 1 ? "nextButton disabled" : "nextButton";
  const customButtonStyle = {
    padding: "10px 15px",
    background: "purple", // Cor de fundo
    color: "#fff", // Cor do texto
    borderRadius: "5px", // Borda arredondada
    margin: "0 5px", // Espaçamento entre os botões
    cursor: "pointer",
    border: "none", // Remove a borda
    outline: "none", // Remove a borda de foco
  };

  // Função para lidar com a mudança de página
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="main">
      <header className="main-header">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src="/assets/logo.png" alt="Logo" />{" "}
          </Link>
        </div>
        <div className="icons">
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
                  src="/assets/banner.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item">
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

        <div className="title-section">
          <h1 className="general-title">ACESSÓRIOS</h1>
          <hr className="hr-sections"></hr>
        </div>

        <div className="container-clothes">
          {currentPageProdutos.map((produto, index) => (
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
        <div className="pagination-container">
          <ReactPaginate
            previousLabel={<button style={customButtonStyle}>Anterior</button>}
            nextLabel={<button style={customButtonStyle}>Próximo</button>}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            previousClassName={prevButtonClass}
            nextClassName={nextButtonClass}
            pageClassName={"page-count"} // Usando pageClassName para estilizar o número da página
            pageLinkClassName={"page-link"}
          />
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

export default Props;
