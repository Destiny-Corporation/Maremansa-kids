import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Carrinho de compras</h1>
      <a href="#">
        <Link to="/home">Voltar para a HOME</Link>
      </a>
    </div>
  );
};

export default Cart;
