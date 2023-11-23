
import "../styles/Product.css";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
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

const Cart = () => {
  const [productLoading, setProductLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [cart, setCart] = useState([]);
  const [zipcode, setZipcode] = useState("");
  const [shippingCost, setShippingCost] = useState(0);
  const [productData, setProductData] = useState(null);
  const { collectionName, productName } = useParams();
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
  };

  const LoadingContainer = () => (
    <div className="loading-container">
      <img src="/assets/espera.gif" alt="Carregando..." style={{ width: '130px', height: '130px' }}/>
    </div>
  );

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        console.log(productName);
        const productData = doc(firestore, collectionName, productName); // Substitua "products" pelo nome da sua coleção
        const productSnapshot = await getDoc(productData);
        if (productSnapshot.exists()) {
          setProductData(productSnapshot.data());
        } else {
          // Handle the case when the product is not found
        }
        setProductLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados do produto:", error);
        // Handle the error state appropriately
        setProductLoading(false);
      }
    };

    fetchProductData();
  }, [collectionName, productName]);

  
  if (productLoading) {
    return <LoadingContainer />;
  }
  

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
        setCart([...cart, newItem]);
      } else {
        alert("Por favor, selecione cor e tamanho antes de adicionar ao carrinho.");
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
        (item) => item.nome_prop === produto.nome_prop
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

    {/*function getSize(size, element) {
      const sizeOptions = document.querySelectorAll(".size-option");
      sizeOptions.forEach((option) => {
        option.classList.remove("selected");
      });
      element.classList.add("selected");
    }*/}

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
    <div className="main">
      <header className="main-header">
        <div className="search-container-header">
            <input type="text" className="search-bar-header" placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"/>
                <button className="search-button-header" type="submit">
                  <i className="bx bx-search"></i>
                </button>
        </div>
        <div className="header-logo-center">
        <Link to="/"> <img src="/assets/logo.png" alt="Logo" className="header-logo-center"/> </Link>
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
      <div className="container-subheader-1">
      <div className="container-menu-buttons-1">
        <div className="button-menu-1">
          <Link to="/sale">
            <h6>PROMOÇÕES</h6>
          </Link>
        </div>

        <div className="button-menu-1">
          <Link to="female">
            <h6>FEMININO</h6>
          </Link>
        </div>

        <div className="button-menu-1">
          <Link to="male">
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
              <img className='small-images'
                src="/assets/principal.png"
                onClick={() => handleImageClick("/assets/principal.png")}
              />

              <img className="small-images"
                src="/assets/image-2.png"
                onClick={() => handleImageClick("/assets/image-2.png")}
              />

              <img className="small-images"
                src="/assets/image-3.png"
                onClick={() => handleImageClick("/assets/image-3.png")}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="left-side">
            <div className="items">
              <div className="select-image">
                <img src={productData ? productData.url_image : ""} />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="right-side">
            <div className="content">
              <h4 className="title-prod">{productName}</h4>
              <hr className="hr-prod" size="1" />

              <span className="off">R$ 199,90</span>
              <span className="price-pd">
                R$ {productData ? productData.preço : ""}
              </span>

              <br></br>
              <p className="text-prod">Selecione a cor do produto:</p>
              <div className="color-buttons">
  <button
    className="color-button"
    style={{
      backgroundColor: "pink",
      padding: "18px",
      cursor: "pointer",
      borderRadius: "10px",
    }}
    onClick={() => selectColor("rosa")}
  ></button>
  <button
    className="color-button"
    style={{
      backgroundColor: "#7d6cdb",
      padding: "18px",
      cursor: "pointer",
      borderRadius: "10px",
    }}
    onClick={() => selectColor("roxo")}
  ></button>
  <button
    className="color-button"
    style={{
      backgroundColor: "#42e0a3",
      padding: "18px",
      cursor: "pointer",
      borderRadius: "10px",
    }}
    onClick={() => selectColor("verde")}
  ></button>
  <button
    className="color-button"
    style={{
      backgroundColor: "yellow",
      padding: "18px",
      cursor: "pointer",
      borderRadius: "10px",
    }}
    onClick={() => selectColor("amarelo")}
  ></button>
              </div>

              <div id="selected-color" style={{ color: selectedColor }}>
  Cor selecionada: {selectedColor}
</div>

  {/*{showSelectedColor && (
  <button className="selected-color-button">{selectColor}</button>
  )} */}


<p className="text-prod">Tamanhos:</p>
      <div className="size-options">
        <div
          className={`size-option ${selectedSize === "06" ? "selected" : ""}`}
          onClick={() => handleSizeSelect("06")}
        >
          06
        </div>
        <div
          className={`size-option ${selectedSize === "08" ? "selected" : ""}`}
          onClick={() => handleSizeSelect("08")}
        >
          08
        </div>
        <div
          className={`size-option ${selectedSize === "10" ? "selected" : ""}`}
          onClick={() => handleSizeSelect("10")}
        >
          10
        </div>
        <div
          className={`size-option ${selectedSize === "12" ? "selected" : ""}`}
          onClick={() => handleSizeSelect("12")}
        >
          12
        </div>
        <div
          className={`size-option ${selectedSize === "14" ? "selected" : ""}`}
          onClick={() => handleSizeSelect("14")}
        >
          14
        </div>
        <div
          className={`size-option ${selectedSize === "16" ? "selected" : ""}`}
          onClick={() => handleSizeSelect("16")}
        >
          16
        </div>
      </div>

      {/*<div id="selected-size">Tamanho selecionado: {selectedSize}</div>*/}

      <div className="options">
        <div className="amount">
          <button
            onClick={() => handleQuantityChange(selectedQuantity - 1)}
          >
            -
          </button>
          <span id="valor">{selectedQuantity}</span>
          <button
            onClick={() => handleQuantityChange(selectedQuantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/*<div id="selected-quantity">Quantidade selecionada: {selectedQuantity}</div>*/}
              <button className="buttons-cart">
                <span>Comprar agora</span>
              </button>
              <button className="buttons-cart">
                <i className="bx bx-cart bt-header"></i>
                <span>Adicionar ao carrinho</span>
              </button>

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
                <input className='cep' type="text" placeholder="DIGITE SEU CEP" id="cep" />
                <button onclick="buscarCEP()">OK</button>
              </div>
              <div id="resultado"></div>
            </div>
          </div>
        </div>
      </section>

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
            <a href="https://whatsapp.com">
              <i className="fa fa-whatsapp"></i>
            </a>
            <a href="https://google.com">
              <i className="fa fa-google"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </section>
        </footer>

        <div className="last-text">
          <p className="text-sub-footer">maremansa</p>
        </div>
    </div>
  );
};
export default Cart;