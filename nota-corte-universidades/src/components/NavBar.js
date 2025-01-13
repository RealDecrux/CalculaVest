import React, { useState } from 'react';
import { Layout, Menu, Modal, Form, Input, Button } from 'antd';
import { HomeOutlined, UserOutlined, CalculatorOutlined, BarChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';  // Importando Link para navegação
import '../styles/NavBar.css';  // Importando o CSS

const { Header } = Layout;

const NavBar = () => {
  // Estado para controlar a visibilidade do modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Função para abrir o modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Função para fechar o modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Função para o login (apenas exemplo)
  const handleLogin = (values) => {
    console.log('Login realizado com sucesso!', values);
    // Aqui você pode fazer a integração com o backend ou armazenar o estado do login
    setIsModalVisible(false);  // Fechar o modal após o login
  };

  return (
    <Layout>
      <Header className="navbar">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className="menu"
        >
          {/* Usando Link para navegar para as páginas */}
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CalculatorOutlined />}>
            <Link to="/Login">Login</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<CalculatorOutlined />}>
            <Link to="/calculo">Calcular Notas</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            <Link to="/grafico">Gráficos</Link>
          </Menu.Item>
        </Menu>
      </Header>

    
    </Layout>
  );
};

export default NavBar;
