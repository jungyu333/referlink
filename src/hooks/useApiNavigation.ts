import { TShowAlertToast } from '@components/common/toast';
import { IApiResponse } from '_types/common';
import { useNavigate } from 'react-router-dom';

export default function useApiNavigation<T extends IApiResponse>() {
  const navigate = useNavigate();

  const apiNavigation = (
    path: string,
    successText: string,
    response: T,
    showToast: TShowAlertToast,
  ) => {
    if (response.result) {
      showToast.info(successText);
      navigate(path, { replace: true });
    } else if (response.message) {
      showToast.info(response.message);
    }
  };

  return apiNavigation;
}
