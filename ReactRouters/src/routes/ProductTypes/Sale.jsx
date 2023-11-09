import React, { useState, useEffect } from "react";
import "../../styles/ProductTypes/Sale.css";
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

const Sale = () => {
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [maxPrice, setMaxPrice] = useState(null);
  const nomesProdutos = ["Conjunto", "Maiô", "Óculos", "Sunga", "Vestidinho", "Colete"];
 
  useEffect(() => {
    const fetchProdutos = async () => {
      const produtosCollection = collection(firestore, "ProdPomo");
      const produtosSnapshot = await getDocs(produtosCollection);
      const produtosData = produtosSnapshot.docs.map((doc) => doc.data());
      setProdutos(produtosData);
    };

    fetchProdutos();
  }, []);

  const [filterParam, setFilterParam] = useState("All");

const handleFilterChange = (e) => {
  setFilterParam(e.target.value);
};

const filteredProdutos = produtos.filter((produto) => {
  // Verifica se o produto corresponde à categoria selecionada ou se a categoria é "All".
  if (filterParam === "All" || produto.nome_prodpromo.toLowerCase().includes(filterParam.toLowerCase())) {
    // Verifica se o produto corresponde ao termo de pesquisa.
    return produto.nome_prodpromo.toLowerCase().includes(searchTerm.toLowerCase());
  }
  return false; // Produto não corresponde à categoria selecionada.
});

const filteredProdutosWithPrice = filteredProdutos.filter((produto) => {
  if (isFilterActive && maxPrice !== null) {
    // Verifica se o preço está no formato correto (por exemplo, "R$ 50,00")
    if (produto.preço && typeof produto.preço === "string") {
      const precoNumerico = parseFloat(
        produto.preço.replace("R$ ", "").replace(",", ".")
      );
      return precoNumerico <= maxPrice;
    }
  }
  return true;
});

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

  return (
    <div className="main">
      <header className="main-header">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src="/assets/logo.png" alt="Logo" />{" "}
          </Link>
        </div>

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
          <button className="button-search-bar" onClick={() => setSearchTerm("")}>Limpar</button>
        )}
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

      <div className="title-section">
  <h1 className="general-title">PROMOÇÕES</h1>
  <button className="filter" onClick={handleFilterButtonClick}>
    <img src="/assets/filter.png" alt="filtro" className="button-image" />
  </button>
  <hr className="hr-sections" />
</div>

{isFilterActive && (
  <div className="filter-container">
    <div className="filter-content">
      <p className="filter-title">FILTRAR</p>
      <hr className="filter-hr" />

      <ul className="filter-list">
        <li>
          <label className='filter-label'>CATEGORIAS:</label>
        </li>
        {nomesProdutos.map((nome, index) => (
          <li className='filter-item' key={index}>
            <button
              className="filter-option"
              onClick={() => handleFilterChange({ target: { value: nome } })}
            >
              {nome}
            </button>
          </li>
        ))}
        <li>
          <button className="close-button" onClick={handleFilterButtonClick}>
            X
          </button>
        </li>
      </ul>
    </div>
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
              <img src={produto.url_image} alt={produto.nome_prodpromo} />
            </Link>
            <Link to="/product">
              <h6 className="text-card-clothes">{produto.nome_prodpromo}</h6>
            </Link>
            <h6 className="text-card-clothes">R$ {produto.preço}</h6>
          </div>
        ))}
      </div>

      <div className="pagination-container">
      <ReactPaginate
        previousLabel={<button className="custom-button">ANTERIOR</button>}
        nextLabel={<button className="custom-button">PRÓXIMO</button>}
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

export default Sale;