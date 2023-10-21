import Cookies from 'js-cookie';

export default function useGetToken() {
  const token = Cookies.get('accessToken');

  return token;
}
