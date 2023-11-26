import { ApiBaseResponse } from '_types/common';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastOptions } from 'react-toastify';
import { ToastBody } from '@components/common/toast/ToastBody';

export const useApiNavigation = <T extends ApiBaseResponse>() => {
  const navigate = useNavigate();

  const apiNavigation = (
    path: string,
    successText: string,
    response: T,
    showToast: (message: ReactNode, options: ToastOptions) => void,
  ) => {
    if (response.statusCode === 200) {
      showToast(React.createElement(ToastBody, { subText: successText }), {});
      navigate(path, { replace: true });
    } else if (response.message) {
      showToast(
        React.createElement(ToastBody, { subText: response.message }),
        {},
      );
    }
  };

  return apiNavigation;
};
