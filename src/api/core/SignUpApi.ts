import axios from 'axios';

const SignUpApi = axios.create({
  baseURL: process.env.REACT_APP_SIGNUP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default SignUpApi;
