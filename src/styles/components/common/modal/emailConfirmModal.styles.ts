import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }

  & p {
    color: ${({ theme }) => theme.colors.grey2};
    font: ${({ theme }) => theme.fonts.body};
    line-height: 150%;
    letter-spacing: -0.32px;
  }
`;
