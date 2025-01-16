// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <h1>Calculadora de Média de Vestibular</h1>
      <p className="header-subtitle">
        Bem-vindo à nossa Calculadora de Média de Vestibular! 
        <br /><br />Com esta ferramenta, você pode calcular sua 
        nota ponderada para os vestibulares de medicina. 
        <br /><br />Para isso, basta inserir suas notas nas matérias 
        exigidas pelas faculdades e os pesos atribuídos a cada uma delas. 
        <br /><br />O cálculo será feito automaticamente 
        para que você saiba qual sua média de corte e como ela se compara com as exigências das universidades.
        <br /><br />
        A maneira mais fácil de planejar sua aprovação!
      </p>
    </header>
  );
};

export default Header;
