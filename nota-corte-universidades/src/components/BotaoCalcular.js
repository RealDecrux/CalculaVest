import React from 'react';
import '../styles/BotaoCalcular.css';  // Caminho correto

const BotaoCalcular = ({ onClick }) => {
  return <button onClick={onClick}>Calcular Média</button>;
};

export default BotaoCalcular;
