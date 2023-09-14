import React from "react";
import "./Exchanges.css";
import { Link } from "react-router-dom";

const Exchanges = () => {
  return (
    <div>
      <h1>Trocas e devoluções</h1>
      <a href="#">
        <Link to="/home">Voltar para a HOME</Link>
      </a>
    </div>
  );
};

export default Exchanges;
