import React from 'react';
import '../styles/InputNotas.css'; // Estilos para o campo de entrada das notas

const InputNotas = ({ materia, valor, onChange }) => {
  return (
    <div className="input-container">
      <label htmlFor={materia}>{materia}</label>
      <input
        id={materia}
        type="number"
        value={valor}
        onChange={(e) => onChange(materia, e.target.value)}
        placeholder={`Nota de ${materia}`}
        min="0"
        max="1000"
      />
    </div>
  );
};

export default InputNotas;
