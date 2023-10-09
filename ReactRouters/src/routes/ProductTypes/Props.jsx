import React, { useState, useEffect } from "react";
import "../../styles/ProductTypes/Props.css";
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

const Props = () => {
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      const produtosCollection = collection(firestore, "Props");
      const produtosSnapshot = await getDocs(produtosCollection);
      const produtosData = produtosSnapshot.docs.map((doc) => doc.data());
      setProdutos(produtosData);
    };

    fetchProdutos();
  }, []);
  

  const filteredProdutos = produtos.filter((produto) =>
    produto.nome_prop.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredProdutos.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageProdutos = filteredProdutos.slice(
    offset,
    offset + itemsPerPage
  );
  const prevButtonClass =
    currentPage === 0 ? "prevButton disabled" : "prevButton";
  const nextButtonClass =
    currentPage === pageCount - 1 ? "nextButton disabled" : "nextButton";

  const customButtonStyle = {
    padding: "10px 15px",
    background: "purple",
    color: "#fff",
    borderRadius: "5px",
    margin: "0 5px",
    cursor: "pointer",
    border: "none",
    outline: "none",
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleFilterButtonClick = () => {
    setIsFilterActive(!isFilterActive);
    setMaxPrice("");
  };
  const filteredProdutosWithPrice = filteredProdutos.filter((produto) => {
    if (isFilterActive && maxPrice !== null) {
      // Verifica se o preço está no formato correto (por exemplo, "R$ 50,00")
      if (produto.preço && typeof produto.preço === "string") {
        const precoNumerico = parseFloat(
          produto.preço.replace("R$ ", "").replace(",", ".")
        );
        return precoNumerico <= maxPrice;
      }
      // Se o preço não estiver no formato esperado, não filtra por preço
      return true;
    }
    return true;
  });

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" type="submit">
            <i className="bx bx-search"></i>
          </button>
          {searchTerm && (
            <button onClick={() => setSearchTerm("")}>Limpar pesquisa</button>
          )}
        </div>

        <div className="title-section">
          <h1 className="general-title">ACESSÓRIOS</h1>
          <button class="filter" onClick={handleFilterButtonClick}>
            <img
              src="/assets/filter.png"
              alt="filtro"
              className="button-image"
            />
          </button>
          <hr className="hr-sections"></hr>
        </div>

        {isFilterActive && (
          <div className="price-filter">
            <label>Preço até: </label>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
            >
              <option value="">Selecione o preço</option>
              <option value="50">Até 50.00</option>
              <option value="100">Até 100.00</option>
              <option value="200">Até 200.00</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
          </div>
        )}
        
        

        <div className="items-per-page">
          <label>Itens por página:</label>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
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
        previousLabel={<button className="custom-button">Anterior</button>}
        nextLabel={<button className="custom-button">Próximo</button>}
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
        pageClassName={"page-count"}
        pageLinkClassName={"page-link"}
      /> </div>
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
