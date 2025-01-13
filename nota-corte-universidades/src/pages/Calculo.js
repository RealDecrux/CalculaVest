import React, { useState } from 'react';
import NavBar from '../components/NavBar';  
import InputNotas from '../components/InputNotas';  
import BotaoCalcular from '../components/BotaoCalcular'; 
import Resultado from '../components/Resultado'; 

const CalculoNotas = () => {
  // Dados das faculdades e seus pesos para as matérias
  const faculdades = [
    { nome: "UFRR", pesos: { matematica: 1, natureza: 3, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFCG", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFS", pesos: { matematica: 1.5, natureza: 3.5, linguagem: 2, humanas: 1, redacao: 2 } },
    { nome: "UFRJ RJ", pesos: { matematica: 2, natureza: 4, linguagem: 2, humanas: 1, redacao: 4 } },
    { nome: "UFRJ MACAE", pesos: { matematica: 1, natureza: 2, linguagem: 2, humanas: 1, redacao: 3 } },
    { nome: "UFMS", pesos: { matematica: 1, natureza: 3, linguagem: 2, humanas: 1, redacao: 2 } },
    { nome: "UFCA", pesos: { matematica: 1.5, natureza: 3, linguagem: 2, humanas: 1.5, redacao: 2 } },
    { nome: "UFAM", pesos: { matematica: 1, natureza: 2, linguagem: 2, humanas: 1, redacao: 2 } },
    { nome: "UFJ", pesos: { matematica: 1.5, natureza: 3, linguagem: 2, humanas: 1.5, redacao: 2 } },
    { nome: "UFPE RECIFE", pesos: { matematica: 2, natureza: 3, linguagem: 2, humanas: null, redacao: 2 } },
    { nome: "UFPE CARUARU", pesos: { matematica: 1.5, natureza: 2.5, linguagem: 1.5, humanas: 2, redacao: 2.5 } },
    { nome: "UFSB", pesos: { matematica: 4, natureza: 5, linguagem: 3, humanas: 2, redacao: 5 } },
    { nome: "UFPB", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UESB", pesos: { matematica: 2, natureza: 4, linguagem: 5, humanas: 2, redacao: 5 } },
    { nome: "UFOB", pesos: { matematica: 2, natureza: 5, linguagem: 4, humanas: 2, redacao: 5 } },
    { nome: "UFES", pesos: { matematica: 2, natureza: 4, linguagem: 3, humanas: 2, redacao: 4 } },
    { nome: "UNIMONTES", pesos: { matematica: 1, natureza: 2, linguagem: 2, humanas: 2, redacao: 2 } },
    { nome: "UFMT", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFCAT", pesos: { matematica: 1.5, natureza: 3, linguagem: 2, humanas: 1.5, redacao: 2 } },
    { nome: "UFR", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UNILAB", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFC", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFRN", pesos: { matematica: 1, natureza: 3, linguagem: 1.5, humanas: 1.5, redacao: 1.5 } },
    { nome: "UNEMAT", pesos: { matematica: 2, natureza: 4, linguagem: 3, humanas: 3, redacao: 3 } },
    { nome: "UNIVASF", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFERSA", pesos: { matematica: 1, natureza: 3.5, linguagem: 2, humanas: 2, redacao: 1.5 } },
    { nome: "UFT", pesos: { matematica: 2, natureza: 4, linguagem: 3, humanas: 2, redacao: 3 } },
    { nome: "UPE", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UEA", pesos: { matematica: 1, natureza: 1, linguagem: 2, humanas: 1, redacao: 2 } },
    { nome: "UEMG", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFJF", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFLA", pesos: { matematica: 2, natureza: 2, linguagem: 2, humanas: 2, redacao: 2 } },
    { nome: "UFOP", pesos: { matematica: 1, natureza: 2, linguagem: 1, humanas: 1, redacao: 2 } },
    { nome: "UFSCAR", pesos: { matematica: 1, natureza: 2, linguagem: 2, humanas: 1, redacao: 2 } },
    { nome: "UFSJ", pesos: { matematica: 1, natureza: 2, linguagem: 2, humanas: 1, redacao: 2 } },
    { nome: "UFV", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFU", pesos: { matematica: 1, natureza: 2, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFTM", pesos: { matematica: 3, natureza: 3, linguagem: 2, humanas: 2, redacao: 3 } },
    { nome: "UFFS", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFPEL", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UNIPAMPA", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFPR", pesos: { matematica: 1, natureza: 1, linguagem: 1, humanas: 1, redacao: 1 } }
 
  ];

  const [faculdadeEscolhida, setFaculdadeEscolhida] = useState(faculdades[0]);
  const [notas, setNotas] = useState({
    Redacao: 0,
    Natureza: 0,
    Linguagem: 0,
    Humanas: 0,
    Matematica: 0,
  });
  const [media, setMedia] = useState(null);

  // Função para atualizar as notas
  const handleChangeNota = (materia, valor) => {
    const nota = parseFloat(valor);
    if (!isNaN(nota) && nota >= 0 && nota <= 1000) {
        setNotas((prevNotas) => ({
            ...prevNotas,
            [materia]: nota,
        }));
    } else {
        // Defina um valor padrão se a nota for inválida
        setNotas((prevNotas) => ({
            ...prevNotas,
            [materia]: 0,
        }));
    }
};

  
  

  // Função para calcular a média
  const calcularMedia = () => {
    const somaNotas = Object.keys(notas).reduce((acc, materia) => {
      const peso = faculdadeEscolhida.pesos[materia] || 0; // Usar 0 se o peso for nulo ou indefinido
      return acc + notas[materia] * peso;
    }, 0);
  
    const somaPesos = Object.values(faculdadeEscolhida.pesos).reduce(
      (acc, peso) => acc + (peso || 0), // Usar 0 se o peso for nulo ou indefinido
      0
    );
  
    const mediaCalculada = somaPesos > 0 ? somaNotas / somaPesos : 0; // Evitar divisão por 0
    setMedia(mediaCalculada);
  };
  

  // Função para selecionar a faculdade
  const handleSelectFaculdade = (nomeFaculdade) => {
    const faculdadeSelecionada = faculdades.find(
      (faculdade) => faculdade.nome === nomeFaculdade
    );
    setFaculdadeEscolhida(faculdadeSelecionada); // Atualizando a faculdade escolhida
  };

  return (
    <div>
      <NavBar />

      <h2>Calculadora de Notas</h2>

      {/* Selecione uma faculdade */}
      <div>
        <label>Escolha uma faculdade: </label>
        <select
          value={faculdadeEscolhida.nome}
          onChange={(e) => handleSelectFaculdade(e.target.value)}
        >
          {faculdades.map((faculdade) => (
            <option key={faculdade.nome} value={faculdade.nome}>
              {faculdade.nome}
            </option>
          ))}
        </select>
      </div>

      {/* Formulário para inserir as notas */}
      <div>
        {Object.keys(notas).map((materia) => (
          <InputNotas
            key={materia}
            materia={materia}
            valor={notas[materia]}
            onChange={handleChangeNota}
          />
        ))}
      </div>

      {/* Botão para calcular a média */}
      <BotaoCalcular onClick={calcularMedia} />

      {/* Exibição da média calculada */}
      <Resultado media={media} />
    </div>
  );
};

export default CalculoNotas;
