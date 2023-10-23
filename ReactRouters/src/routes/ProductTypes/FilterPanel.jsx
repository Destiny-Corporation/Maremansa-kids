import React from "react";

// Em FilterPanel.jsx
const FilterPanel = ({ filterParam, maxPrice, handleFilterChange, setMaxPrice }) => {
  return (
    <div className="filter-panel">
      <h3>Filtros</h3>
      <label>Filtrar por:</label>
      <select value={filterParam} onChange={handleFilterChange}>
        {/* Opções de filtro */}
        <option value="All">Todos</option>
        {/* Adicione outras opções de filtro, como "Conjunto", "Maiô", etc. */}
      </select>
      <label>Preço até:</label>
      <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
        <option value="">Selecione o preço</option>
        <option value="50">Até 50.00</option>
        <option value="100">Até 100.00</option>
        <option value="200">Até 200.00</option>
        {/* Adicione mais opções conforme necessário */}
      </select>
    </div>
  );
};

export default FilterPanel;

