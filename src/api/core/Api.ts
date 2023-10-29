import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

Api.interceptors.request.use((config) => {
  if (config.prefix) {
    config.url = config.prefix + config.baseURL + config.url;
  }

  return config;
});

export default Api;
