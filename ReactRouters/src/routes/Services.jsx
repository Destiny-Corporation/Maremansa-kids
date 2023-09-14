import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1>Atendimento</h1>
      <a href="#">
        <Link to="/home">Voltar para a HOME</Link>
      </a>
    </div>
  );
};

export default Services;
