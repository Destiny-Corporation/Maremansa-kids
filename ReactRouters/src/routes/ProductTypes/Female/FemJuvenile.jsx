import React, { useState, useEffect } from "react";
import "../../../styles/ProductTypes/Female/FemJuvenile.css";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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

const FemJuvenile = () => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [showNotification2, setShowNotification2] = useState(false);

  const showAddedToCartNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const showAddedToFavoriteNotification = () => {
    setShowNotification2(true);
    setTimeout(() => {
      setShowNotification2(false);
    }, 2000);
  };
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [maxPrice, setMaxPrice] = useState(null);
  const nomesProdutos = [
    "Conjunto",
    "Maiô",
    "Óculos",
    "Sunga",
    "Vestidinho",
    "Colete",
  ];

  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [cartVisible, setCartVisible] = useState(false);
  const [isComponentReady, setIsComponentReady] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const savedFavoriteItems = localStorage.getItem("favoriteItems");
    return savedFavoriteItems ? JSON.parse(savedFavoriteItems) : [];
  });

  const handleAddToFavorites = (produto) => {
    const existingItemIndex = favoriteItems.findIndex(
      (item) => item.nome_prodfemme === produto.nome_prodfemme
    );
  
    if (existingItemIndex === -1) {
      setFavoriteItems([...favoriteItems, { ...produto }]);
    }
    setIsItemAdded(true);
    setTimeout(() => {
      setIsItemAdded(false);
    }, 5000);
  }; 
  
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);


  const handleCartIconClick = () => {
    setCartVisible(!cartVisible);
    setOverlayVisible(!cartVisible);
  };

  const handleCloseCartClick = () => {
    setCartVisible(false);
    setOverlayVisible(false);
  };

  useEffect(() => {
    // Recupera os itens do carrinho do localStorage ao carregar a página
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []); // O segundo argumento vazio garante que este efeito seja executado apenas uma vez, após a montagem inicial do componente.

  const handleAddToCart = (produto) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.nome_prodfemme === produto.nome_prodfemme
    );

    if (existingItemIndex !== -1) {
      // Se o item já está no carrinho, aumente a quantidade
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantidade += 1;
      setCartItems(updatedCartItems);
    } else {
      // Se o item não está no carrinho, adicione-o com quantidade 1
      setCartItems([...cartItems, { ...produto, quantidade: 1 }]);
    }

    // ... Lógica para adicionar o item ao carrinho

    // Após adicionar o item, exiba a mensagem e defina um temporizador para ocultá-la
    setIsItemAdded(true);
    setTimeout(() => {
      setIsItemAdded(false);
    }, 5000); // Oculta a mensagem após 5 segundos (ou você pode definir outro valor)
  };

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = cartItems.filter(
      (_, itemIndex) => itemIndex !== index
    );
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.preço * item.quantidade;
    }
    return total.toFixed(2);
  };

  useEffect(() => {
    setTotal(calculateTotal());
    // Salva os itens do carrinho no localStorage sempre que o cartItems for modificado
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const produtosCollection = collection(firestore, "Prodfemme");
      const produtosQuery = query(
        produtosCollection,
        where("category_prodfemme", "==", "Juvenil")
      );
      const produtosSnapshot = await getDocs(produtosQuery);
      const produtosData = produtosSnapshot.docs.map((doc) => doc.data());
      setProdutos(produtosData);
      console.log(produtosData);
    };

    fetchProdutos();
  }, []);

  const [filterParam, setFilterParam] = useState("All");

  const handleFilterChange = (e) => {
    setFilterParam(e.target.value);
  };

  const filteredProdutos = produtos.filter((produto) => {
    if (
      produto.nome_prodfemme &&
      (filterParam === "All" ||
        produto.nome_prodfemme
          .toLowerCase()
          .includes(filterParam.toLowerCase()))
    ) {
      return produto.nome_prodfemme
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
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
    <>
    <div className="main">
    <header className="main-header">
      <div className="search-container-header">
        <input
          type="text"
          className="search-bar-header"
          placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" type="submit">
          <i className="bx bx-search"></i>
        </button>
        </div>
        <div className="header-logo-center">
          <Link to="/">
            {" "}
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="header-logo-center"
            />{" "}
          </Link>
        </div>
        <div className="icons-w">
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

          <i
            className="bx bx-cart bt-header animation"
            style={{ color: "#ffffff" }}
            id="cart-icon"
            onClick={handleCartIconClick}
          ></i>
        </div>

        <div
          className={`overlay ${overlayVisible ? "active" : ""}`}
          onClick={handleCloseCartClick}
        ></div>
        <div className={`cart ${cartVisible ? "active" : ""}`}>
          <h2 className="cart-title-1">MEU CARRINHO</h2>
          <div className="cart-content-1">
            {cartItems.map((produto, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={produto.url_image}
                  alt={produto.nome_prop}
                  className="cart-item-image-1"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                    padding: "10px",
                    borderRadius: "60px",
                  }}
                />

                <div className="cart-item-details">
                  <div className="cart-item-name-1">
                    {produto.nome_prodmale ||
                      produto.nome_prop ||
                      produto.nome_prodpromo ||
                      produto.nome_prodfemme}
                  </div>
                  <div className="cart-item-price-1">R$ {produto.preço}</div>
                  <input
                    type="number"
                    className="cart-quantity-1"
                    value={produto.quantidade}
                    onChange={(e) => {
                      const updatedCartItems = [...cartItems];
                      updatedCartItems[index].quantidade =
                        parseInt(e.target.value, 10) || 0;
                      setCartItems(updatedCartItems);
                    }}
                    style={{
                      border: "1.2px solid #48a3a9",
                      outlineColor: "#48a3a9",
                      width: "2.6rem",
                      textAlign: "center",
                      fontSize: "0.8rem",
                    }}
                  />
                </div>
                <i
                  className="bx bxs-trash-alt cart-remove cart-item-remove-1"
                  onClick={() => handleRemoveFromCart(index)}
                ></i>
              </div>
            ))}
          </div>
          <div className="cart-box"></div>
          <hr></hr>
          <div className="total">
            <div className="total-title">Total</div>
            <div className="total-price">$ {total}</div>
          </div>

          <Link to="/checkout">
            <button type="button" className="btn-buy">
              COMPRAR AGORA
            </button>
          </Link>

          <Link to="/cart2">
            <button type="button" className="btn-buy">
              VER MEU CARRINHO
            </button>
          </Link>
          <i
            className="bx bx-x"
            id="close-cart"
            onClick={handleCloseCartClick}
          ></i>
        </div>
      </header>

      <div className="container-subheader-1">
        <div className="container-menu-buttons-1">
          <div className="button-menu-1">
            <Link to="/sale">
              <h6>PROMOÇÕES</h6>
            </Link>
          </div>

          <div className="button-menu-1">
            <Link to="/female">
              <h6>FEMININO</h6>
            </Link>
          </div>

          <div className="button-menu-1">
            <Link to="/male">
              <h6>MASCULINO</h6>
            </Link>
          </div>

          <div className="button-menu-1">
            <Link to="/props">
              <h6>ACESSÓRIOS</h6>
            </Link>
          </div>
        </div>
      </div>

      <div className="space">
        <div className="title-section">
          <h1 className="general-title">FEMININO | JUVENIL</h1>
          <button className="filter" onClick={handleFilterButtonClick}>
            <img
              src="/assets/filter.png"
              alt="filtro"
              className="button-image animation"
            />
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
                  <label className="filter-label">CATEGORIAS:</label>
                </li>
                {nomesProdutos.map((nome, index) => (
                  <li className="filter-item" key={index}>
                    <button
                      className="filter-option"
                      onClick={() =>
                        handleFilterChange({ target: { value: nome } })
                      }
                    >
                      {nome}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className="close-button"
                    onClick={handleFilterButtonClick}
                  >
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
  {filteredProdutosWithPrice.map((produto, index) => (
    <div className="clothes" key={index} style={{ width: "20%" }}>
      <Link to={`/product/${"Prodfemme"}/${produto.nome_prodfemme}`}>
        <img
          className="img_prod"
          src={produto.url_image}
          alt={produto.nome_prodfemme}
        />
      </Link>
      <div className="info-container1">
        <Link to={`/product/${"Prodfemme"}/${produto.nome_prodfemme}`}>
          <h6 className="text-card-h">{produto.nome_prodfemme}</h6>
        </Link>
  <div className="price-and-icons">
    <h6 className="price">R$ {produto.preço}</h6>
    <div className="icons-container">
      <i
        className="bx bx-cart bt-header carto"
        style={{ color: "#48a3a9" }}
        onClick={() => {
          handleAddToCart(produto);
          showAddedToCartNotification();
        }}
      ></i>
      <i
        className="bx bx-heart bt-header heartho"
        style={{ color: "#48a3a9" }}
        onClick={() => {
          handleAddToFavorites(produto);
          showAddedToFavoriteNotification();
        }}
      ></i>
    </div>
  </div>
</div>
            </div>
          ))}
        </div>
        
        {showNotification && (
        <div className={`notification ${isItemAdded ? "active" : ""}`}>
          <p className="not">Item adicionado ao carrinho!</p>
          <Link to="/cart2" className="go-to-cart-button">
            Ir para o Carrinho
          </Link>
        </div>
      )}

      {showNotification2 && (
          <div className={`notification ${isItemAdded ? "active" : ""}`}>
            <p className="not">Item adicionado a lista de desejo!</p>
            <Link to="/wishlist" className="go-to-cart-button">
              Ir para a Lista de Desejo
            </Link>
          </div>
        )}
      </div>

      <div className="pagination-container">
        <ReactPaginate
          previousLabel={<button className="btn-6">ANTERIOR</button>}
          nextLabel={<button className="btn-6">PRÓXIMO</button>}
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
        />{" "}
      </div>
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

export default FemJuvenile;
