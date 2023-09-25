import { IApiResponse } from '_types/common';
import { useNavigate } from 'react-router-dom';

export default function useApiNavigation<T extends IApiResponse>() {
  const navigation = useNavigate();
  const apiNavigation = (path: string, response: T) => {
    if (response.result) {
      navigation(`/${path}`, { replace: true });
    } else {
      alert(response.message);
    }
  };

  return apiNavigation;
}
