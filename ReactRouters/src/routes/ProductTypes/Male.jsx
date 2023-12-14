import React, { useState, useEffect } from "react";
import "../../styles/ProductTypes/Female.css";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";
import ReactPaginate from "react-paginate";

let isLoggedIn = false;
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

const Male = () => {
  const userIconLink = isLoggedIn ? "/requests" : "/login";
  if (localStorage.getItem("user") !== null) {
    localStorage.setItem("loggedIn", "true");
    isLoggedIn = true;
  }
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [maxPrice, setMaxPrice] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const nomesProdutos = ["Conjunto", "Maiô", "Óculos", "Sunga", "Vestidinho", "Colete"];
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
 
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

const handleCartIconClick = () => {
  setCartVisible(!cartVisible);
  setOverlayVisible(!cartVisible);
};

const handleCloseCartClick = () => {
  setCartVisible(false);
  setOverlayVisible(false);
};


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
                <Link to={userIconLink}>
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
                        height: "150px",
                        objectFit: "cover",
                        padding: "10px",
                        borderRadius: "20px",
                      }}
                    />

                    <div className="cart-item-details">
                      <div className="cart-item-name-1">
                        {produto.nome_prodmale ||
                          produto.nome_prop ||
                          produto.nome_prodpromo ||
                          produto.nome_prodfemme}
                      </div>
                      <div className="cart-item-price-1">
                        R$ {produto.preço}
                      </div>
                    <div className="amount-1">
                <button
                  // className="quantity-button"
                  onClick={() => handleQuantityChange(index, produto.quantidade - 1)}
                >
                  -
                </button>

                <span className="cart-quantity">{produto.quantidade}</span>

                <button
                  // className="quantity-button"
                  onClick={() => handleQuantityChange(index, produto.quantidade + 1)}
                >
                  +
                </button>
              </div>



                    </div>
                    <i
                      className="bx bxs-trash-alt cart-remove cart-item-remove-1 animation"
                      onClick={() => handleRemoveFromCart(index)}
                    ></i>
                  </div>
                ))}
              </div>
              <div className="cart-box"></div>
              <hr></hr>
              <div className="total">
                <div className="total-title">Total</div>
                <div className="total-price-cartl">R$ {total}</div>
              </div>

              <Link to="/checkout">
                <button type="button" className="btn-1">
                  COMPRAR AGORA
                </button>
              </Link>

              <Link to="/cart">
                <button type="button" className="btn-1">
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
      
      <div className="title-section">
        <h1 className="general-title">MASCULINO</h1>
        {/* <button class="filter" onClick={handleFilterButtonClick}>
            <img
              src="/assets/filter.png"
              alt="filtro"
              className="button-image"
            />
          </button> */}
        <hr className="hr-sections"></hr>

        <div className="container-female">
  <div className="roupa-fundo-female"></div>

<div>
<Link to="/male/male-baby">
  <div className="roupa-female" style={{ backgroundImage: "url('/assets/male-baby.png')" }}>
  </div>
  <div><p className="roupa-title-1">BABY</p></div></Link></div>

  <div>
  <Link to="/male/male-children"><div className="roupa-female" style={{ backgroundImage: "url('/assets/male-children.png')" }}>
  </div><div><p className="roupa-title-1">INFANTIL</p></div></Link></div>

  <div>
  <Link to="/male/male-juvenile"><div className="roupa-female" style={{ backgroundImage: "url('/assets/male-juvenile.png')" }}>
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

export default Male;
