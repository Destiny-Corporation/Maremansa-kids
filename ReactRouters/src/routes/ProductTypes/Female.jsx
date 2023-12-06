import React, { useState, useEffect } from "react";
import "../../styles/ProductTypes/Female.css";
import { Link } from "react-router-dom";
import FemBaby from "./Female/FemBaby";
import FemInfantil from "./Female/FemChildren";
import FemJuvenil from "./Female/FemJuvenile";
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

const Female = () => {
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [maxPrice, setMaxPrice] = useState(null);
  const nomesProdutos = ["Conjunto", "Maiô", "Óculos", "Sunga", "Vestidinho", "Colete"];
 
  useEffect(() => {
    const fetchProdutos = async () => {
      const produtosCollection = collection(firestore, "Prodfemme");
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
  if (produto.nome_prodfemme && (filterParam === "All" || produto.nome_prodfemme.toLowerCase().includes(filterParam.toLowerCase()))) {
    return produto.nome_prodfemme.toLowerCase().includes(searchTerm.toLowerCase());
  }
  return false;
});


const filteredProdutosWithPrice = filteredProdutos.filter((produto) => {
  if (isFilterActive && maxPrice !== null) {
    // Verifica se o preço está no formato correto (por exemplo, "R$ 50,00")
    if (produto.preço_atacado && typeof produto.preço_atacado === "string") {
      const precoNumerico = parseFloat(
        produto.preço_atacado.replace("R$ ", "").replace(",", ".")
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
    <><div className="main">
      <header className="main-header">
        <div className="logo-product">
          <Link to="/">
            <img src="/assets/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="icons-about">
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
          <Link to="/cart">
            <i
              className="bx bx-cart bt-header"
              style={{ color: "#ffffff" }}
            ></i>
          </Link>
        </div>
      </header>

      <div className="title-section">
        <h1 className="general-title">FEMININO</h1>
        <button class="filter" onClick={handleFilterButtonClick}>
            <img
              src="/assets/filter.png"
              alt="filtro"
              className="button-image"
            />
          </button>
        <hr className="hr-sections"></hr>

        <div className="container-female">
  <div className="roupa-fundo-female"></div>

<div>
<Link to="/female/fem-baby">
  <div className="roupa-female" style={{ backgroundImage: "url('/assets/female-baby.png')" }}>
  </div>
  <div><p className="roupa-title-1">BABY</p></div></Link></div>

  <div>
  <Link to="/female/fem-children"><div className="roupa-female" style={{ backgroundImage: "url('/assets/female-children.png')" }}>
  </div><div><p className="roupa-title-1">INFANTIL</p></div></Link></div>

  <div>
  <Link to="/female/fem-juvenile"><div className="roupa-female" style={{ backgroundImage: "url('/assets/female-juvenile.png')" }}>
  </div><div><p className="roupa-title-1">JUVENIL</p></div></Link></div>
</div>


        {/*<div className="female-sections">
          <div className="female-sections1">
            <img src="/assets/sections-title1.png" /> 
          </div>

          <div className="female-sections1">
            <img src="/assets/sections-title2.png" /> 
          </div>

          <div className="female-sections1">
            <img src="/assets/sections-title3.png" /> 
          </div>
  </div>*/}

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
</>
  );
};

export default Female;
