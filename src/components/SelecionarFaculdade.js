import '../styles/SelecionarFaculdade.css';

import React from 'react';

const SelecionarFaculdade = ({ faculdadeEscolhida, handleSelectFaculdade, faculdades }) => {
  return (
    <div className="select-container">
      <label className="select-label">Escolha uma faculdade: </label>
      <select
        value={faculdadeEscolhida.nome}
        onChange={(e) => handleSelectFaculdade(e.target.value)}
        className="select-dropdown"
      >
        {faculdades.map((faculdade) => (
          <option key={faculdade.nome} value={faculdade.nome}>
            {faculdade.nome}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelecionarFaculdade;
