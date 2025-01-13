import React from 'react';
import '../styles/SelecionarFaculdade.css'; // Estilos para o componente de seleção de faculdade

const SelecionarFaculdade = ({ faculdades, onSelectFaculdade }) => {
  return (
    <div className="select-container">
      <label htmlFor="faculdade">Escolha a Faculdade</label>
      <select id="faculdade" onChange={(e) => onSelectFaculdade(e.target.value)}>
        {faculdades.map((faculdade, index) => (
          <option key={index} value={faculdade.nome}>
            {faculdade.nome}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelecionarFaculdade;
