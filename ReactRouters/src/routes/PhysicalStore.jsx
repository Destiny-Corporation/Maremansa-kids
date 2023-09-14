import React from "react";
import "./PhysicalStore.css";
import { Link } from "react-router-dom";

const PhysicalStore = () => {
  return (
    <div>
      <h1>Nossa Loja Física</h1>
      <a href="#">
        <Link to="/home">Voltar para a HOME</Link>
      </a>
    </div>
  );
};

export default PhysicalStore;
