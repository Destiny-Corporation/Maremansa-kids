import React from "react";
import "./Male.css";
import { Link } from "react-router-dom";

const Male = () => {
  return (
    <div>
      <h1>Sessão Masculina</h1>
      <a href="#">
        <Link to="/home">Voltar para a HOME</Link>
      </a>
    </div>
  );
};

export default Male;
