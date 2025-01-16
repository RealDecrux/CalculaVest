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
      </div>
    </div>
  );
};

export default Home;
