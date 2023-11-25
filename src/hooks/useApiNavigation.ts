import { IApiResponse } from '_types/common';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastOptions } from 'react-toastify';
import { ToastBody } from '@components/common/toast/ToastBody';

export const useApiNavigation = <T extends IApiResponse>() => {
  const navigate = useNavigate();

  const apiNavigation = (
    path: string,
    successText: string,
    response: T,
    showToast: (message: ReactNode, options: ToastOptions) => void,
  ) => {
    if (response.result) {
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
