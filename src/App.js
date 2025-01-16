import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  // Página Home
import Login from './pages/Login';  // Página Login
import CalculoNotas from './pages/Calculo';  // Página de Cálculo de Notas
import Grafico from './pages/Grafico';  // Página de Gráficos

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calculo" element={<CalculoNotas />} />
        <Route path="/grafico" element={<Grafico />} />
      </Routes>
    </Router>
  );
};

export default App;
