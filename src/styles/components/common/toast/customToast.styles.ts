import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const Container = styled(ToastContainer)`
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
