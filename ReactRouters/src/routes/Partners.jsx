import React from "react";
import "./Partners.css";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <div>
      <h1>Nossas Parcerias</h1>
      <a href="#">
        <Link to="/home">Voltar para a HOME</Link>
      </a>
    </div>
  );
};

export default Partners;
