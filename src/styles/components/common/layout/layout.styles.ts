import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
`;

export const Content = styled.div`
  flex: 1;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
