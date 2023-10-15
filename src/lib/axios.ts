import Axios from 'axios';
import { API_URL } from '../config';
import { setupCache } from 'axios-cache-interceptor';

const client = Axios.create({
  baseURL: API_URL
});

export const axios = setupCache(client);

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);