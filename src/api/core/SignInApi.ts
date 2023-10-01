import axios from 'axios';

const SignInApi = axios.create({
  baseURL: process.env.REACT_APP_SIGNIN_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default SignInApi;
