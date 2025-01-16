import React, { useState } from 'react';
import NavBar from '../components/NavBar';  
import InputNotas from '../components/InputNotas';  
import BotaoCalcular from '../components/BotaoCalcular'; 
import Resultado from '../components/Resultado'; 
import SelecionarFaculdade from '../components/SelecionarFaculdade'; 
import MensagemErro from '../components/mensagens/MensagemErro';

const CalculoNotas = () => {
  const faculdades = [
    { nome: "UFRR", pesos: { matematica: 1, natureza: 3, linguagem: 1, humanas: 1, redacao: 1 } },
    { nome: "UFAM", pesos: { matematica: 1, natureza: 2, linguagem: 2, humanas: 1, redacao: 2 } },
    // ... (resto das faculdades)
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
  const [mensagemErro, setMensagemErro] = useState('');

  // Função para atualizar as notas
  const handleChangeNota = (materia, valor) => {
    const nota = parseFloat(valor);
    if (isNaN(nota) || nota < 0 || nota > 1000) {
      setMensagemErro(`A nota de ${materia} deve ser um número entre 0 e 1000.`);
      setNotas((prevNotas) => ({
        ...prevNotas,
        [materia]: 0,
      }));
    } else {
      setMensagemErro(''); // Remove a mensagem de erro
      setNotas((prevNotas) => ({
        ...prevNotas,
        [materia]: nota,
      }));
    }
  };

  // Função para calcular a média ponderada
  const calcularMedia = () => {
    if (Object.values(notas).some((nota) => nota === 0)) {
      setMensagemErro('Todas as notas devem ser preenchidas corretamente.');
      return;
    }

    const somaNotas = Object.keys(notas).reduce((acc, materia) => {
      const nota = parseFloat(notas[materia]) || 0;
      const peso = parseFloat(faculdadeEscolhida.pesos[materia.toLowerCase()]) || 0;
      return acc + nota * peso;
    }, 0);

    const somaPesos = Object.values(faculdadeEscolhida.pesos).reduce(
      (acc, peso) => acc + (parseFloat(peso) || 0),
      0
    );

    const mediaCalculada = somaPesos > 0 ? somaNotas / somaPesos : 0;
    setMensagemErro(''); // Limpa mensagens de erro antes de exibir o resultado
    setMedia(mediaCalculada);
  };

  // Função para selecionar a faculdade
  const handleSelectFaculdade = (nomeFaculdade) => {
    const faculdadeSelecionada = faculdades.find(
      (faculdade) => faculdade.nome === nomeFaculdade
    );
    setFaculdadeEscolhida(faculdadeSelecionada);
  };

  return (
    <div>
      <NavBar />
      <h2>Calculadora de Notas</h2>

      <SelecionarFaculdade
        faculdadeEscolhida={faculdadeEscolhida}
        handleSelectFaculdade={handleSelectFaculdade}
        faculdades={faculdades}
      />

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

      {mensagemErro && <MensagemErro mensagem={mensagemErro} />}

      <BotaoCalcular onClick={calcularMedia} />

      <Resultado media={media} />
    </div>
  );
};

export default CalculoNotas;
