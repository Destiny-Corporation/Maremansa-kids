import React from "react";
import "./Props.css";
import { Link } from "react-router-dom";

const Props = () => {
  return (
    <div>
      <h1>Acessórios</h1>
      <a href="#">
        <Link to="/home">Voltar para a HOME</Link>
      </a>
    </div>
  );
};

export default Props;
