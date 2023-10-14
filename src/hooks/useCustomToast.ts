import React, { ReactNode } from 'react';
import { ToastOptions, toast } from 'react-toastify';
import { ReactComponent as TickCircleSVG } from '@styles/images/svg/tickCircle.svg';

const defaultToastOption: ToastOptions = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
};

const useCustomToast = () => {
  const info = (message: ReactNode, options: ToastOptions = {}) => {
    toast.info(message, {
      ...defaultToastOption,
      icon: React.createElement(TickCircleSVG),
      ...options,
    });
  };

  const success = (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(message, {
      ...defaultToastOption,
      ...options,
    });
  };

  const error = (message: ReactNode, options: ToastOptions = {}) => {
    toast.error(message, {
      ...defaultToastOption,
      ...options,
    });
  };

  return {
    info,
    success,
    error,
  };
};

export default useCustomToast;
