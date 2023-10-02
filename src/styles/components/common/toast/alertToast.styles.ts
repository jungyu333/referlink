import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const Container = styled(ToastContainer)`
  .Toastify__toast-container {
    display: inline-flex;
    padding: 32px 60px;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  }

  .Toastify__toast {
    margin: 0;
  }

  .Toastify__toast-body {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 0 10px;
    margin: 0;

    & > div:last-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      color: ${({ theme }) => theme.colors.grey2};
      font: ${({ theme }) => theme.fonts.body2};
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
