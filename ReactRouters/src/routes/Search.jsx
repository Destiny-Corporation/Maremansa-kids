import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "debounce";

const automateSearchBar = (searchValue) => {
  // Verifica se o valor da pesquisa é "sunga"
  if (searchValue === "sunga") {
    // Navega para a rota /male
    navigate("/male");
  }

  // Verifica se o valor da pesquisa é "biquini"
  if (searchValue === "biquini") {
    // Navega para a rota /female"
    navigate("/female");
  }

  // Verifica se o valor da pesquisa é "boia", "óculos" ou "baldinho"
  if (["boia", "óculos", "baldinho"].includes(searchValue)) {
    // Navega para a rota /props"
    navigate("/props");
  }
};

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Debounce a função `automateSearchBar`
    setDebouncedSearchValue(debounce(searchValue, 5000));
  }, [searchValue]);

  useEffect(() => {
    // Navegue para a rota apropriada com base no valor da pesquisa
    if (debouncedSearchValue === "sunga") {
      navigate("/male");
    } else if (debouncedSearchValue === "biquini") {
      navigate("/female");
    } else if (["boia", "óculos", "baldinho"].includes(debouncedSearchValue)) {
      navigate("/props");
    }
  }, [debouncedSearchValue]);

  return (
    <div className="search-container-geral">
      <input
        type="text"
        className="search-bar"
        placeholder="O QUE VOCÊ ESTÁ BUSCANDO?"
        onChange={(e) => setSearchValue(e.target.value)} />
      <button className="search-button" type="submit">
        <i className="bx bx-search"></i>
      </button>
    </div>
  );
};

export default Search;
