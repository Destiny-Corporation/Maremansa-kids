import React from "react";
import "./Wishlist.css";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <div>
      <h1>Lista de desejos</h1>
      <a href="#">
        <Link to="/home">Voltar para a HOME</Link>
      </a>
    </div>
  );
};

export default Wishlist;
