// src/pages/Home.js
import React from 'react';
// src/pages/Home.js

import Header from '../components/Header';  // Verifique se Header.js existe em src/components/
import NavBar from '../components/NavBar';  // Verifique se NavBar.js existe em src/components/
import '../styles/Home.css';  // Verifique se Home.css está na mesma pasta que Home.js



const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <NavBar />
      <div className="home-content">
        <h2>Bem-vindo à nossa Calculadora de Média de Vestibular!</h2>
        <p>Este site permite que você calcule sua média de vestibular com base nas notas e pesos das matérias das faculdades.</p>
        
      </div>
    </div>
  );
};

export default Home;
