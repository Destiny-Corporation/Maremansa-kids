import React, { useState } from "react";
import "../styles/Product.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Product() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
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

  const handleAddToCart1 = () => {
    const data = {
      color: selectedColor,
      size: selectedSize,
      quantity: selectedQuantity,
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

    function getSize(size, element) {
      const sizeOptions = document.querySelectorAll(".size-option");
      sizeOptions.forEach((option) => {
        option.classList.remove("selected");
      });
      element.classList.add("selected");
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

    function selectColor(color) {
      document.getElementById("selected-color").innerHTML =
        "Cor selecionada: " + color;
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
        <div className="logo">
          <Link to="/">
            {" "}
            <img src="/assets/logo.png" alt="Logo" />{" "}
          </Link>
        </div>
        <div className="icons">
          <a href="#">
            <Link to="/login">
              <i
                className="bx bx-user bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
          <a href="#">
            <Link to="/wishlist">
              <i
                className="bx bx-heart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
          <i className="bx bx-cart bt-header" style={{ color: "#ffffff" }}></i>
        </div>
      </header>

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

      <section className="main-products">
        <div className="container">
          <div className="products-left">
            <div className="imagens">
              <img src="/assets/image-2.png" />

              <img src="/assets/image-3.png" />

              <img src="/assets/image-4.png" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="left-side">
            <div className="items">
              <div className="select-image">
                <img src="/assets/principal.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="right-side">
            <div className="content">
              <h4 className="title-prod">Conjunto Pirata</h4>
              <hr className="hr-prod" size="1" />

              <span className="off">R$ 199,90</span>
              <span className="price">R$ 149,90</span>

              <br></br>
              <p className="text-prod">Selecione a cor do produto:</p>
              <div className="color-buttons">
                <button
                  className="color-button"
                  style={{
                    backgroundColor: "red",
                    padding: "18px",
                    cursor: "pointer",
                    borderRadius: "10px",
                  }}
                  onclick={() => selectColor("vermelho")}
                ></button>
                <button
                  className="color-button"
                  style={{
                    backgroundColor: "blue",
                    padding: "18px",
                    cursor: "pointer",
                    borderRadius: "10px",
                  }}
                  onclick={() => selectColor("azul")}
                ></button>
                <button
                  className="color-button"
                  style={{
                    backgroundColor: "green",
                    padding: "18px",
                    cursor: "pointer",
                    borderRadius: "10px",
                  }}
                  onclick={() => selectColor("verde")}
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

              <div id="selected-color">Cor selecionada:</div>
              <p className="text-prod">Tamanhos:</p>
              <div class="size-options">
                <div className="size-option" onClick="getSize('6', this)">
                  06
                </div>
                <div className="size-option" onClick="getSize('8', this)">
                  08
                </div>
                <div className="size-option" onClick="getSize('10', this)">
                  10
                </div>
                <div className="size-option" onClick="getSize('12', this)">
                  12
                </div>
                <div className="size-option" onClick="getSize('14', this)">
                  14
                </div>
                <div className="size-option" onClick="getSize('16', this)">
                  16
                </div>
              </div>

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
                <input type="text" id="cep" />
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
            <h3>CONTATOS</h3>
            <Link to="#">
              <i className="fa fa-whatsapp"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-google"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-instagram"></i>
            </Link>
          </div>
        </section>

        <div className="last-text">
          <p className="text-sub-footer">maremansa</p>
        </div>
      </footer>
    </div>
  );
}

export default Product;
