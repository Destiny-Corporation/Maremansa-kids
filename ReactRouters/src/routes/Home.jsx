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
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const showAddedToCartNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [cartVisible, setCartVisible] = useState(false);
  const [isComponentReady, setIsComponentReady] = useState(false);

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
        <div className="logo-home">
          <img src="/assets/logo.png" alt="Logo" />
        </div>

        <div className="header-items">
          <div className="header-item1">
            <img
              className="items-home"
              src="/assets/comente.png"
              alt="Comente"
            />
            <li>
              <Link to="#">ATENDIMENTO</Link>
            </li>
          </div>

          <div className="header-item2">
            <img
              className="items-home"
              src="/assets/placeholder.png"
              alt="Localização"
            />
            <li>
              <Link to="#">LOCALIZAÇÃO</Link>
            </li>
          </div>
        </div>
      </header>

      <div className="space">
        <div className="align">
          <div className="search-container-1">
            <input
              type="text"
              className="search-bar"
              placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"
            />
            <button className="search-button" type="submit">
              <i className="bx bx-search"></i>
            </button>
          </div>
          <p className="home-t">
            Bem vindo!<br></br>Entre ou cadastre-se
          </p>
          <div className="icons-home">
            <Link to="/login">
              <i
                className="bx bx-user bt-header"
                style={{ color: "#48A3A9" }}
              ></i>
            </Link>

            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header"
                style={{ color: "#48A3A9" }}
              ></i>
            </Link>

            <i
              className="bx bx-cart bt-header"
              style={{ color: " #48A3A9" }}
              onClick={handleCartIconClick}
            ></i>
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
                      <div className="cart-item-price-1">
                        R$ {produto.preço}
                      </div>
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
          </div>
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

          <div className="button-menu">
            <Link to="/props">
              <img src="/assets/accessories.png" alt="" />
            </Link>
            <Link to="/props">
              <h6>ACESSÓRIOS</h6>
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
                <Link to={`/product/${"Prodfemme"}/${produto.nome_prodfemme}`}>
                  <img src={produto.url_image} alt={produto.nome_prodfemme} />
                </Link>
                <Link to={`/product/${"Prodfemme"}/${produto.nome_prodfemme}`}>
                  <h6 className="text-card">{produto.nome_prodfemme}</h6>
                </Link>
                <h6 className="text-card">R$ {produto.preço}</h6>
                <i
                  className="bx bx-cart bt-header pd"
                  style={{ color: "#48a3a9" }}
                  onClick={() => {
                    handleAddToCart(produto);
                    showAddedToCartNotification();
                  }}
                ></i>
              </div>
            ))}
            {showNotification && (
              <div className={`notification ${isItemAdded ? "active" : ""}`}>
                <p className="not">Item adicionado ao carrinho!</p>
                <Link to="/cart2" className="go-to-cart-button">
                  Ir para o Carrinho
                </Link>
              </div>
            )}
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
