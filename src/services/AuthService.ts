const APP_URL = import.meta.env.VITE_REACT_APP_URL
import axios from 'axios';

console.log(APP_URL);

const API = axios.create({
  baseURL: APP_URL,
});

export type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};


export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await API.post<LoginResponse>('/auth/login', credentials);
  return response.data;
};


export const fetchCurrentUser = async () => {
  const response = await API.get('/auth/me');
  return response.data;
}