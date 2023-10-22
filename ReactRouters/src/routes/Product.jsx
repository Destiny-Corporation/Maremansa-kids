import React from "react";
import "../styles/Product.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="main">
    <header className="main-header">
        <div className="logo">
        <Link to="/"> <img src="/assets/logo.png" alt="Logo" /> </Link>
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
          <a href="#">
            <Link to="/cart">
              <i
                className="bx bx-cart bt-header"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
          </a>
        </div>
      </header>
      

    <section className="products-main">
      <div className="container">
        <div className= "products-left">
          <div className="imagens">

            <div className="image">
              <img src="/assets/model-1.png" />
            </div>

            <div className="image">
              <img src="/assets/model-1.png" />
            </div>

            <div className="image">
              <img src="assets/model-1.png" />
            </div>

            </div>
        </div>
        <div className="left-side">
          <div className="items">
            <div className="select-image">
              <img src="/assets/model-1.png"/>
            </div>

            </div>
        </div>

        <div className="right-side">
          <div className="content">
            <h6>MareMansa Kids</h6>
              <h1>Conjunto Pirata</h1>
            <hr size = "1" /> 
               <p>Conjunto Pirata é um produto 100% elastano, produzido e distribuido por Maremansa Kids</p>
                 <div className="prices">
                   <span className="price">R$ 199,90</span>
                   <span className="off">R$ 149,90</span>
                 </div>

            <p>Selecione a cor do produto:</p>
            <div className="color-buttons">
                <button className="color-button" style= {{ backgroundColor: "red", padding: "20px", cursor: "pointer", borderRadius: "10px" }} onclick ={() => selectColor('vermelho')}></button>
                <button className="color-button" style= {{ backgroundColor: "blue", padding: "20px", cursor: "pointer", borderRadius: "10px" }} onclick={() => selectColor('azul')}></button>
                <button className="color-button" style= {{ backgroundColor: "green", padding: "20px", cursor: "pointer", borderRadius: "10px" }} onclick={() => selectColor('verde')}></button>
                <button className="color-button" style= {{ backgroundColor: "yellow", padding: "20px", cursor: "pointer", borderRadius: "10px" }} onClick={() => selectColor('amarelo')}></button>

            <div id="selected-color">Cor selecionada: Nenhuma</div>
            <p>Tamanhos:</p>
              <div class="size-options">
                <div className="size-option" onclick="getSize('6', this)">6</div>
                <div className="size-option" onclick="getSize('8', this)">8</div>
                <div className="size-option" onclick="getSize('10', this)">10</div>
                <div className="size-option" onclick="getSize('12', this)">12</div>
                <div className="size-option" onclick="getSize('14', this)">14</div>
                <div className="size-option" onclick="getSize('16', this)">16</div>
              </div>

             
            <div className="options">     
              <div className="amount">
                <button onclick="subtrair()">-</button>
                <span id="valor">0</span>
                <button onclick="adicionar()">+</button>
              </div>
              </div>
            
              <a href="" className="button">Comprar agora</a>
              <a href="" className="button"><i class='bx bx-cart bt-header'></i>Adicionar ao carrinho</a>

            <div class="cep">
              <p>Consulte o CEP</p>
              <label for="cep"></label>
              <input type="text" id="cep"></input>
              <button onclick="buscarCEP()">OK</button>

              <div id="resultado"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  
    </div> 
  );
};

export default Cart;
