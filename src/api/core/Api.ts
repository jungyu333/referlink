import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

Api.interceptors.request.use((config: any) => {
  if (config.prefix) {
    config.url = config.prefix + (config.url || '');
  }
  return config;
});

export default Api;
