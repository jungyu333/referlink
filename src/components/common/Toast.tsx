import { ReactNode } from 'react';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  type: 'success' | 'error' | 'info' | 'action';
  message?: string;
  //action?: string;
};

const defaultToastOption: ToastOptions = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
};

export const showToast = {
  info: (message: ReactNode, options: ToastOptions = {}) => {
    toast.info(message, {
      ...defaultToastOption,
      // icon: <Icon name="cart" stroke={white} />,
      ...options,
    });
  },
  success: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(message, {
      ...defaultToastOption,
      //icon: <Icon name="check-circle" stroke={white} />,
      ...options,
    });
  },
  error: (message: ReactNode, options: ToastOptions = {}) => {
    toast.error(message, {
      ...defaultToastOption,
      //icon: <Icon name="alert-triangle" stroke={white} />,
      ...options,
    });
  },
};

export const Toast = () => {
  return <Container />;
};

const Container = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 16px;
    border-radius: 50px;
    padding: 16px 28px;
    color: #fff;
    background: rgba(107, 115, 135, 0.8);
  }

  .Toastify__toast-icon {
    width: 22px;
    height: 22px;
  }

  .Toastify__toast--info {
    background: rgba(107, 115, 135, 0.8);
  }

  .Toastify__toast--success {
    background: rgba(48, 173, 120, 0.8);
  }

  .Toastify__toast--error {
    background: rgba(224, 72, 82, 0.8);
  }
`;
