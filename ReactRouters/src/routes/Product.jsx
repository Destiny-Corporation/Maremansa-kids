import "../styles/Product.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Cart = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [cart, setCart] = useState([]);
  const [zipcode, setZipcode] = useState("");
  const [shippingCost, setShippingCost] = useState(0);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    if (selectedColor && selectedSize) {
      const newItem = {
        color: selectedColor,
        size: selectedSize,
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

  return (
    <div className="product-container">
      <div className="product-images">
        <div className="main-image">
          <img src="/assets/model-1.png" alt="Produto" />
        </div>
        <div className="thumbnail-images">
          <div>
            <img src="/assets/model-2.png" alt="Imagem 1" />
          </div>
          <div>
            <img src="/assets/model-3.png" alt="Imagem 2" />
          </div>
          <div>
            <img src="/assets/model-4.png" alt="Imagem 3" />
          </div>
        </div>
      </div>

      <div className="product-details">
        <h2>Produto</h2>
        <h3>Selecione a cor do produto:</h3>
        <div className="color-buttons">
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => handleColorChange("vermelho")}
          >
            Vermelho
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => handleColorChange("azul")}
          >
            Azul
          </button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => handleColorChange("verde")}
          >
            Verde
          </button>
        </div>

        <h3>Selecione o tamanho:</h3>
        <div className="size-buttons">
          <button onClick={() => handleSizeChange("P")}>P</button>
          <button onClick={() => handleSizeChange("M")}>M</button>
          <button onClick={() => handleSizeChange("G")}>G</button>
        </div>

        <button onClick={addToCart}>Adicionar ao Carrinho</button>

        <div className="cart-details">
          <h2>Itens no Carrinho:</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                Cor: {item.color}, Tamanho: {item.size}
              </li>
            ))}
          </ul>
        </div>

        <div className="shipping-details">
          <h2>Calcular Frete:</h2>
          <input
            type="text"
            placeholder="Digite o CEP"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <button onClick={calculateShippingCost}>Calcular</button>
          <p>Custo de Envio: R$ {shippingCost}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
