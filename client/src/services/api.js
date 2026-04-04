/*import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
}); */
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
  forgotPassword: (data) => api.post('/auth/forgot-password', data),
  verifyEmail: (token) => api.get(`/auth/verify-email?token=${token}`),
};

export const destinationsAPI = {
  getAll: (params) => api.get('/destinations', { params }),
  getById: (id) => api.get(`/destinations/${id}`),
  search: (query) => api.get(`/destinations/search?q=${query}`),
};

export const userAPI = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data) => api.put('/user/profile', data),
  getFavorites: () => api.get('/user/favorites'),
  addFavorite: (destinationId) => api.post('/user/favorites', { destinationId }),
  removeFavorite: (destinationId) => api.delete(`/user/favorites/${destinationId}`),
};

export default api;
