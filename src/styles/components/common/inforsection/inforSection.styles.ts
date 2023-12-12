import styled from 'styled-components';

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;

  & h1 {
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
  }
`;

export const InforTable = styled.div`
  display: flex;
  width: 100%;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};

  & section {
    display: flex;
    align-items: flex-start;
    gap: 56px;
  }
`;

export const InforItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }

  & p {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle3};
    letter-spacing: -0.36px;
  }
`;
