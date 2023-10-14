import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const Container = styled(ToastContainer)`
  .Toastify__toast-container {
    display: inline-flex;
    padding: 16px 32px 16px 24px;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
    width: 304px;
    height: 78px;
  }

  .Toastify__toast {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 16px 32px 16px 24px;
  }

  .Toastify__toast-body {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0px;
    margin: 0;
    & > div:last-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
  }

  .Toastify__toast-icon {
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;
