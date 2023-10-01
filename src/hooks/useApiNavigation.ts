import { IApiResponse } from '_types/common';
import { useNavigate } from 'react-router-dom';

export default function useApiNavigation<T extends IApiResponse>() {
  const navigate = useNavigate();

  const apiNavigation = (path: string, response: T) => {
    if (response.result) {
      navigate(path, { replace: true });
    } else if (response.message) {
      alert(response.message);
    }
  };

  return apiNavigation;
}
