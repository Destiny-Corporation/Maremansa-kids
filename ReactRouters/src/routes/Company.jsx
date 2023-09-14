import React from "react";
import "./Company.css";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div>
      <h1>A Empresa</h1>
      <a href="#">
        <Link to="/home">Voltar para a HOME</Link>
      </a>
    </div>
  );
};

export default Company;
