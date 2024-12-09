import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (email, password) => {
  const response = await api.post('/usuarios/login', { email, password });
  return response.data;
};

export const getProyectos = async () => {
  const response = await api.get('/proyectos');
  return response.data;
};

export const createProyecto = async (proyecto) => {
  const response = await api.post('/proyectos', proyecto);
  return response.data;
};

export default api;
