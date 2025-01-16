// Resultado.js
import React from 'react';

const Resultado = ({ media }) => {
  return (
    <div>
      {media !== null && (
        <h2>A média calculada é: {media.toFixed(2)}</h2>
      )}
    </div>
  );
};

export default Resultado;
