import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";

import "../styles/Product.css"; // Certifique-se de que o caminho do seu arquivo CSS está correto
let isLoggedIn = false;
// Restante do seu código...

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

// Restante do seu código...

const Cart = () => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showNotification2, setShowNotification2] = useState(false);
  const [isColorSelected, setIsColorSelected] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState(false);

  const userIconLink = isLoggedIn ? "/requests" : "/login";
  if (localStorage.getItem("user") !== null) {
    localStorage.setItem("loggedIn", "true");
    isLoggedIn = true;
  }

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

  const [showDescription, setShowDescription] = useState(false);
  const [productLoading, setProductLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [cart, setCart] = useState([]);
  const [zipcode, setZipcode] = useState("");
  const [shippingCost, setShippingCost] = useState(0);
  // const [productData, setProductData] = useState(null);
  const [productData, setProductData] = useState({});

  const { collectionName, productName } = useParams();

  const selectColor = (color) => {
    setSelectedColor(color);
    setIsAddToCartDisabled(!color || !selectedSize);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setIsAddToCartDisabled(!selectedColor || !size);
  };
  const [selectedImage, setSelectedImage] = useState(
    productData ? productData.url_image : ""
  );
  const [selectedCartItem, setSelectedCartItem] = useState({});
  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(true);
  const [productRef, setProductRef] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
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
      (item) => item.productName === productName
    );

    if (existingItemIndex !== -1) {
      // Se o item já está no carrinho, aumente a quantidade
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantidade += 1;
      setCartItems(updatedCartItems);
    } else {
      // Se o item não está no carrinho, adicione-o com quantidade 1
      setCartItems([
        ...cartItems,
        { ...produto, quantidade: selectedQuantity },
      ]);
    }

    const selectColor = (color) => {
      setSelectedColor(color);
      setIsColorSelected(true);
      setIsAddToCartDisabled(!isColorSelected || !isSizeSelected);
    };

    const handleSizeSelect = (size) => {
      setSelectedSize(size);
      setIsSizeSelected(true);
      setIsAddToCartDisabled(!isColorSelected || !isSizeSelected);
    };

    const handleAddToCart = (produto) => {
      // Verifique se tanto a cor quanto o tamanho foram selecionados
      if (isColorSelected && isSizeSelected) {
        const newItem = {
          nome_prop: productName,
          cor: selectedColor,
          tamanho: selectedSize,
          quantidade: selectedQuantity,
          preço: productData ? productData.preço : 0,
          url_image: productData ? productData.url_image : "",
        };
        setCartItems([...cartItems, newItem]);
      }
    };

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

  const LoadingContainer = () => (
    <div className="loading-container">
      <img
        src="/assets/espera.gif"
        alt="Carregando..."
        style={{ width: "130px", height: "130px" }}
      />
    </div>
  );

  // const [favoriteItems, setFavoriteItems] = useState(() => {
  //   const savedFavoriteItems = localStorage.getItem("favoriteItems");
  //   return savedFavoriteItems ? JSON.parse(savedFavoriteItems) : [];
  // });
  // const handleAddToFavorites = (produto) => {
  //   const existingItemIndex = favoriteItems.findIndex(
  //     (item) => item.nome_prop === produto.nome_prop
  //   );

  //   if (existingItemIndex === -1) {
  //     setFavoriteItems([...favoriteItems, { ...produto }]);
  //   }
  //   setIsItemAdded(true);
  //   setTimeout(() => {
  //     setIsItemAdded(false);
  //   }, 5000);
  // };

  // useEffect(() => {
  //   const fetchProductData = async () => {
  //     try {
  //       console.log(productName);
  //       const productData = doc(firestore, collectionName, productName); // Substitua "products" pelo nome da sua coleção
  //       const productSnapshot = await getDoc(productData);
  //       if (productSnapshot.exists()) {
  //         setProductData(productSnapshot.data());
  //       } else {
  //         // Handle the case when the product is not found
  //       }
  //       setProductLoading(false);
  //     } catch (error) {
  //       console.error("Erro ao buscar dados do produto:", error);
  //       // Handle the error state appropriately
  //       setProductLoading(false);
  //     }
  //   };

  //   fetchProductData();
  // }, [collectionName, productName]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productData = doc(firestore, collectionName, productName);
        const productSnapshot = await getDoc(productData);
        if (productSnapshot.exists()) {
          setProductData(productSnapshot.data());
        } else {
          // Handle the case when the product is not found
        }
        setProductLoading(false);
        if (productData.color && productData.color.length > 0) {
          setIsAddToCartDisabled(!selectedColor || !selectedSize);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do produto:", error);
        // Handle the error state appropriately
        setProductLoading(false);
      }
    };

    fetchProductData();
  }, [collectionName, productName, productData, selectedColor, selectedSize]);

  if (productLoading) {
    return <LoadingContainer />;
  }

  const handleQuantityChange = (newQuantity) => {
    console.log("New Quantity:", newQuantity);
    if (newQuantity >= 1) {
      setSelectedQuantity(newQuantity);
    }
  };

  const handleAddToCart1 = () => {
    const data = {
      color: selectedColor,
      size: selectedSize,
      quantity: selectedQuantity,
    };

    const handleColorChange = (color) => {
      setSelectedColor(color);
    };

    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };

    const addToCart = () => {
      if (selectedColor && selectedSize) {
        const newItem = {
          nome_prop: productName,
          cor: selectedColor,
          tamanho: selectedSize,
          quantidade: selectedQuantity,
          preço: productData ? productData.preço : 0,
          url_image: productData ? productData.url_image : "",
        };
        console.log(newItem);
        setCart([...cart, newItem]);
      } else {
        alert(
          "Por favor, selecione cor e tamanho antes de adicionar ao carrinho."
        );
      }
    };

    const calculateShippingCost = () => {
      // Implemente a lógica real para calcular o custo de envio com base no CEP
      // e atualize o estado de "shippingCost" com o valor calculado.
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
        (item) =>
          item.nome_prop === produto.nome_prop || item.nome_prop === productName
      );

      if (existingItemIndex !== -1) {
        // Se o item já está no carrinho, aumente a quantidade
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantidade += selectedQuantity;
        setCartItems(updatedCartItems);
      } else {
        // Se o item não está no carrinho, adicione-o com quantidade 1
        setCartItems([
          ...cartItems,
          { ...produto, quantidade: selectedQuantity },
        ]);
      }
    };

    const handleRemoveFromCart = (index) => {
      const updatedCartItems = cartItems.filter(
        (_, itemIndex) => itemIndex !== index
      );
      setCartItems(updatedCartItems);
    };
    const handleCloseCartClick = () => {
      setCartVisible(false); // Esconde o carrinho quando o usuário clica no ícone de fechar
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

    {
      /*function getSize(size, element) {
      const sizeOptions = document.querySelectorAll(".size-option");
      sizeOptions.forEach((option) => {
        option.classList.remove("selected");
      });
      element.classList.add("selected");
    }*/
    }

    var valorAtual = 1;
    var valorElement = document.getElementById("valor");

    function adicionar() {
      valorAtual++;
      valorElement.textContent = valorAtual;
    }

    function subtrair() {
      if (valorAtual > 1) {
        valorAtual--;
        valorElement.textContent = valorAtual;
      }
    }

    function buscarCEP() {
      var cep = document.getElementById("cep").value;
      $.ajax({
        url: "https://viacep.com.br/ws/" + cep + "/json/",
        type: "GET",
        success: function (response) {
          if (!response.erro) {
            document.getElementById("resultado").innerHTML =
              "<strong>Rua:</strong> " +
              response.logradouro +
              "<br>" +
              "<strong>Bairro:</strong> " +
              response.bairro +
              "<br>" +
              "<strong>Cidade:</strong> " +
              response.localidade +
              "<br>" +
              "<strong>Estado:</strong> " +
              response.uf;
          } else {
            document.getElementById("resultado").innerHTML =
              "CEP não encontrado";
          }
        },
      });
    }
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
            />
            <button className="search-button-header" type="submit">
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
          <div className="icons-about">
            <Link to={userIconLink}>
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

            <Link to="/cart">
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

        <section className="main-products">
          <div className="container">
            <div className="products-left">
              <div className="imagens">
                <img
                  className="small-images"
                  src={productData ? productData.url_image : ""}
                  onClick={() =>
                    setSelectedImage(productData ? productData.url_image : "")
                  }
                />

                <img
                  className="small-images"
                  src={productData ? productData.url_image2 : ""}
                  onClick={() =>
                    setSelectedImage(productData ? productData.url_image2 : "")
                  }
                />

                <img
                  className="small-images"
                  src={productData ? productData.url_image3 : ""}
                  onClick={() =>
                    setSelectedImage(productData ? productData.url_image3 : "")
                  }
                />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="left-side">
              <div className="items">
                <div className="select-image">
                  <img
                    src={
                      selectedImage !== ""
                        ? selectedImage
                        : productData
                        ? productData.url_image
                        : ""
                    }
                    alt="Select"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="right-side">
              <div className="content">
                <h4 className="title-prod">{productName}</h4>
                <hr className="hr-prod" size="1" />

                {/* <span className="off">R$ 199,90</span>*/}
                <span className="price-pd">
                  R$ {productData ? productData.preço : ""}
                </span>

                {/*{showSelectedColor && (
  <button className="selected-color-button">{selectColor}</button>
  )} */}

                <br></br>
                {productData &&
                  productData.color &&
                  productData.color.length > 0 && (
                    <>
                      <p className="text-prod">Selecione a cor do produto:</p>
                      <ul>
                        {productData.color.map((color) => (
                          <button
                            key={color}
                            className="color-button"
                            style={{
                              backgroundColor: color,
                              padding: "18px",
                              cursor: "pointer",
                              borderRadius: "10px",
                              border:
                                selectedColor === color
                                  ? "2px solid #000"
                                  : "none",
                            }}
                            onClick={() => selectColor(color)}
                          >
                            {selectedColor === color && (
                              <div
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  borderRadius: "50%",
                                  backgroundColor: selectedColor,
                                  display: "inline-block",
                                  marginLeft: "8px",
                                }}
                              />
                            )}
                          </button>
                        ))}
                      </ul>

                      {isColorSelected && (
                        <div id="selected-color">
                          Cor selecionada:{" "}
                          <div
                            style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "50%",
                              backgroundColor: selectedColor,
                              display: "inline-block",
                              marginLeft: "8px",
                            }}
                          />
                        </div>
                      )}
                    </>
                  )}

                {productData.size && productData.size.length > 0 && (
                  <div className="size-options">
                    <p className="text-prod">Tamanhos:</p>
                    {productData.size.map((size) => (
                      <div
                        key={size}
                        className={`size-option ${
                          selectedSize === size ? "selected" : ""
                        }`}
                        onClick={() => handleSizeSelect(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                )}

                {selectedSize && (
                  <div id="selected-size">
                    Tamanho selecionado: {selectedSize}
                  </div>
                )}

                <div className="options">
                  <div className="amount">
                    {selectedQuantity > 0 && (
                      <button
                        onClick={() =>
                          handleQuantityChange(selectedQuantity - 1)
                        }
                      >
                        -
                      </button>
                    )}
                    <span id="valor">{selectedQuantity}</span>
                    <button
                      onClick={() => handleQuantityChange(selectedQuantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {selectedQuantity > 0 && (
                  <div id="selected-quantity">
                    Quantidade selecionada: {selectedQuantity}
                  </div>
                )}

                <button className="buttons-cart" disabled={isAddToCartDisabled}>
                  <span>Comprar agora</span>
                </button>
                <button
                  className="buttons-cart"
                  onClick={() => {
                    handleAddToCart(productData);
                    showAddedToCartNotification();
                  }}
                >
                  <i className="bx bx-cart bt-header"></i>
                  <span>Adicionar ao carrinho</span>
                </button>
                {showNotification && (
                  <div
                    className={`notification ${isItemAdded ? "active" : ""}`}
                  >
                    <p className="not">Item adicionado ao carrinho!</p>
                    <Link to="/cart2" className="go-to-cart-button">
                      Ir para o Carrinho
                    </Link>
                  </div>
                )}
                <div className="cep-text">
                  <i
                    className="bx bxs-truck"
                    style={{ color: "#48a3a9", marginRight: "5px" }}
                  ></i>
                  <p style={{ display: "inline", verticalAlign: "middle" }}>
                    Consulte o frete
                  </p>
                </div>

                <div className="cep">
                  <input
                    className="cep"
                    type="text"
                    placeholder="DIGITE SEU CEP"
                    id="cep"
                  />
                  <button onclick="buscarCEP()">OK</button>
                </div>
                <div id="resultado"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="description-section">
          <hr className="hr-prod-1" size="1" />
          <h4 className="title-prod-1">
            Descrição do Produto{" "}
            <button
              className={`show-more-button-1 ${
                showDescription ? "expanded" : ""
              }`}
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? "-" : "+"}
            </button>
          </h4>
          <hr className="hr-prod-1" size="1" />

          <p className="description-text">
            {showDescription ? productData?.descrição : ""}
          </p>
        </div>
      </div>

      <footer>
        <section className="footer-section">
          <div className="footer-section-div">
            <Link to="/">
              <img className="rotating-jumping-image" src="/assets/whale.png" />
            </Link>
          </div>

          <div className="footer-section-div">
            <h3 className="footer-animation-title">SOBRE NÓS</h3>
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
            <h3 className="footer-animation-title">SUPORTE</h3>
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
            <h3 className="footer-animation-title">CONTATOS</h3>
            <a
              href="https://web.whatsapp.com/send?phone=5585986056136"
              target="_blank"
              title="whatsapp"
            >
              <i className="fa fa-whatsapp"></i>
            </a>
            <a
              href="https://www.facebook.com/maremansakidss"
              target="_blank"
              title="facebook"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/maremansakids/"
              target="_blank"
              title="instagram"
            >
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
export default Cart;
