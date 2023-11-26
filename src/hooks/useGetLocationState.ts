import { useLocation } from 'react-router-dom';

export const useGetLocationState = <T extends object>() => {
  const location = useLocation();
  return location.state as T | undefined;
};
