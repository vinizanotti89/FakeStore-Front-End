import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001',
});

// Função específica para buscar produtos em oferta
export const getProductsOnOffer = async () => {
  try {
    const response = await api.get('/products/offers');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos em oferta:', error);
    throw error;
  }
};

// Função para buscar categorias (caso não tenha)
export const getCategories = async () => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    throw error;
  }
};


export default api;