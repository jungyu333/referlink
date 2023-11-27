import axios from 'axios';
import Cookies from 'js-cookie';

const AuthApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_END_POINT,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

AuthApi.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default AuthApi;
