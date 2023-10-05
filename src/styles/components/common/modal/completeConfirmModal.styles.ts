import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  & h1 {
    color: ${({ theme }) => theme.colors.grey3};
    text-align: center;
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
  }

  & p {
    color: ${({ theme }) => theme.colors.grey2};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;
