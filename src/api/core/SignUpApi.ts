import axios from 'axios';

const SignUpApi = axios.create({
  baseURL: process.env.REACT_APP_SIGNUP_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default SignUpApi;
