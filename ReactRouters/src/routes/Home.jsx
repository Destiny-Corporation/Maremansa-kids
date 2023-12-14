import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MusicPlayer from '../routes/MusicPlayer.jsx';
let isLoggedIn = false;
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import debounce from 'debounce';

ReactDOM.render(
  <React.StrictMode>
    <MusicProvider>
      <App />
    </MusicProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

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
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantidade = Math.max(0, newQuantity);
  
    // Remove item from the cart if the new quantity is zero
    if (updatedCartItems[index].quantidade === 0) {
      updatedCartItems.splice(index, 1);
    }
  
    setCartItems(updatedCartItems);
  };
  
  
  
  if (localStorage.getItem("user") !== null) {
    localStorage.setItem("loggedIn", "true");
    isLoggedIn = true;
  }
  const auth = getAuth();
  const [user, setUser] = useState(null);
     
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Certifique-se de limpar o listener quando o componente for desmontado
    return () => unsubscribe();
  }, [auth]);


  const [isItemAdded, setIsItemAdded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
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

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const debouncedSearchFunction = debounce(async () => {
    // Navegue para a rota apropriada com base no valor da pesquisa
    if (["sunga", "menino", "conjunto"].includes(searchValue)) {
      await navigate("/male");
    } else if (["biquini", "biquíni", "conjunto", "vestido", "menina", "maio", "maiô"].includes(searchValue)) {
      await navigate("/female");
    } else if (["boia", "óculos", "oculos","baldinho","chapéu", "chapeu","pulseira"].includes(searchValue)) {
      await navigate("/props");
    } else if (searchValue === "promoções") {
      await navigate("/sale");
    } else if (searchValue === "empresa") {
      await navigate("/about");
    } else if (searchValue === "loja") {
      await navigate("/physicalstore");
    } else if (searchValue === "mapa") {
      await navigate("/sitemap");
    }
  }, 500);

  useEffect(() => {
    // Chame a função debouncedSearchFunction() de forma assíncrona
    debouncedSearchFunction();
  }, [searchValue]);

  const [favoriteItems, setFavoriteItems] = useState(() => {
    const savedFavoriteItems = localStorage.getItem("favoriteItems");
    return savedFavoriteItems ? JSON.parse(savedFavoriteItems) : [];
  });
  const handleAddToFavorites = (produto) => {
    const existingItemIndex = favoriteItems.findIndex(
      (item) => item.nome_prop === produto.nome_prop
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

  const [userVisible, setUserVisible] = useState(false);

  const handleUserIconClick = () => {
    setUserVisible(!userVisible);
    setOverlayVisible(!userVisible);
  };

  const handleCloseUserClick = () => {
    setUserVisible(false);
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
    <><div className="main">
      <header className="main-header">
        <div className="logo-home">
          <img src="/assets/logo.png" alt="Logo" />
        </div>

        <div className="header-items">
          <div className="header-item1">
          <i class='bx bx-chat'></i>
            <li>
              <Link to="/services">ATENDIMENTO</Link>
            </li>
          </div>

          <div className="header-item2">
          <i class='bx bx-map'></i>
            <li>
              <Link to="/physicalstore">LOCALIZAÇÃO</Link>
            </li>
          </div>
        </div>
      </header>

    <div className ='space'>
      <div className='align'>
      <div className="search-container-1">
        <input
          type="text"
          className="search-bar"
          placeholder="O QUE VOCÊ ESTÁ BUSCANDO?" 
          onChange={(e) => {
            setSearchValue(e.target.value);
          }} />
        <button className="search-button" type="submit">
          <i className="bx bx-search"></i>
        </button>
        </div>
        <Link to="/login"><p className="home-t">Bem vindo!<br></br>Entre ou cadastre-se</p></Link>
        <div className="icons-home">

          <Link>
            <i
              className="bx bx-user bt-header animation"
              style={{ color: " #48A3A9" }}
              onClick={handleUserIconClick}
            ></i></Link>
            <div
              className={`overlay ${overlayVisible ? "active" : ""}`}
              onClick={handleCloseUserClick}
            ></div>
            <div className={`user ${userVisible ? "active" : ""}`}>
            <div className="cart-content-1">
      {user ? (
        <h3 className="user-title-1">Olá, {user.email.split('@')[0]}</h3>
      ) : (
        <h3 className="user-title-1">Olá, usuário</h3>
      )}
    </div>

            <Link to={userIconLink}>
              <i
                className="bx bx-user bt-header animation"
                style={{ color: "#48A3A9" }}>
              </i> 
              </Link>

              <Link to="/Requests2">
                <button type="button" className="btn-buy">
                  MEUS PEDIDOS
                </button>
              </Link>

              <Link to="/Wishlist">
                <button type="button" className="btn-buy">
                  LISTA DE DESJOS
                </button>
              </Link>

              <Link to="/cart2">
                <button type="button" className="btn-buy">
                  VER MEU CARRINHO
                </button>
              </Link>

              
              <i
                className="bx bx-x"
                id="close-user"
                onClick={handleCloseUserClick}
              ></i>
            </div>

            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header animation"
                style={{ color: "#48A3A9" }}
              ></i>
            </Link>

          <Link>
            <i
              className="bx bx-cart bt-header animation"
              style={{ color: " #48A3A9" }}
              onClick={handleCartIconClick}
            ></i></Link>
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
          </div>
        </div>

        <div className="carousel-container">
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
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
              <h6 className="home-sections-bt">PROMOÇÕES</h6>
            </Link>
          </div>

          <div className="button-menu">
            <Link to="female">
              <img src="/assets/female.png" alt="" />
            </Link>
            <Link to="female">
              <h6 className="home-sections-bt">FEMININO</h6>
            </Link>
          </div>

          <div className="button-menu">
            <Link to="male">
              <img src="/assets/male.png" alt="" />
            </Link>
            <Link to="male">
              <h6 className="home-sections-bt">MASCULINO</h6>
            </Link>
          </div>

          <div className="button-menu">
            <Link to="/props">
              <img src="/assets/accessories.png" alt="" />
            </Link>
            <Link to="/props">
              <h6 className="home-sections-bt">ACESSÓRIOS</h6>
            </Link>
          </div>
        </div>

        <hr size="1" />

        <div className="container-clothes-main-1">
  <i
    className={`bx bx-chevron-left animation ${isSlideAnimationActive ? 'slide-animation' : ''}`}
    style={{ color: "#48A3A9", cursor: "pointer", fontSize: "80px" }}
    onClick={() => {
      setCurrentPage(currentPage - 1);
      setIsSlideAnimationActive(true);

      // Reset the animation after a short delay (e.g., 0.5 seconds)
      setTimeout(() => {
        setIsSlideAnimationActive(false);
      }, 500);
    }}
    disabled={currentPage === 0}
  ></i>

<div className="container-clothes-home">
  
  {produtos.slice(startIndex, endIndex).map((produto, index) => (
    <div className="clothes-home" key={index} style={{ width: "25%" }}>
      <Link to={`/product/${"Prodfemme"}/${produto.nome_prodfemme}`}>
        <img src={produto.url_image} alt={produto.nome_prodfemme} />
      </Link>

      <div className="info-container-home">
  <Link to={`/product/${"Prodfemme"}/${produto.nome_prodfemme}`}>
    <h6 className="text-card-h">{produto.nome_prodfemme}</h6>
  </Link>
  <div className="price-and-icons-home">
    <h6 className="price">R$ {produto.preço}</h6>
    <div className="icons-container">
      <i
        className="bx bx-cart bt-header carth"
        style={{ color: "#48a3a9" }}
        onClick={() => {
          handleAddToCart(produto);
          showAddedToCartNotification();
        }}
      ></i>
      <i
        className="bx bx-heart bt-header hearth animation"
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


           <i
    className={`bx bx-chevron-right animation ${isSlideAnimationActive ? 'slide-animation' : ''}`}
    style={{ color: "#48A3A9", cursor: "pointer", fontSize: "80px" }}
    onClick={() => {
      setCurrentPage(currentPage + 1);
      setIsSlideAnimationActive(true);

      // Reset the animation after a short delay (e.g., 0.5 seconds)
      setTimeout(() => {
        setIsSlideAnimationActive(false);
      }, 500);
    }}
    disabled={currentPage === pageCount - 1}
  ></i>
        </div>
      </div>
      <div className="space-1"></div>
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
  <Link to="https://web.whatsapp.com/send?phone=5585986056136" target="_blank" title="whatsapp">
    <i className="fa fa-whatsapp"></i>
  </Link>
  <Link to="https://www.facebook.com/maremansakidss" target="_blank" title="facebook">
    <i className="fa fa-facebook"></i>
  </Link>
  <Link to="https://www.instagram.com/maremansakids/" target="_blank" title="instagram">
    <i className="fa fa-instagram"></i>
  </Link>
</div>
        </section>
      </footer>
      <div className="last-text">
        <p className="text-sub-footer">maremansa</p>
      </div>

</>
  );
};


export default Home;