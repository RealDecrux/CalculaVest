// src/pages/Login.js
import React from 'react';
import '../styles/Login.css';  // Ajuste do caminho para o CSS
import NavBar from '../components/NavBar';  // Verifique se NavBar.js existe em src/components/




const Login = () => {
  return (
    <div className="login-container">

        <NavBar />
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Login;
