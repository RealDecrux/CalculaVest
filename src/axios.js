import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/resource');
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};
