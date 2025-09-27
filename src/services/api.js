import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
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

export const login = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Interceptor para anexar o token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default api;