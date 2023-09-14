import React from "react";
import "./Sitemap.css";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div>
      <h1>Mapa do site</h1>
      <a href="#">
        <Link to="/home">Voltar para a HOME</Link>
      </a>
    </div>
  );
};

export default Sitemap;
