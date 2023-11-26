import Cookies from 'js-cookie';

export const useGetToken = () => {
  const token = Cookies.get('accessToken');

  return token;
};
