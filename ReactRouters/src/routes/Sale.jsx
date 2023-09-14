import React from "react";
import "./Sale.css";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <div>
      <h1>Promoções</h1>
      <a href="#">
        <Link to="/home">Voltar para a HOME</Link>
      </a>
    </div>
  );
};

export default Sale;
