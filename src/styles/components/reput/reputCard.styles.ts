import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  padding: 40px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.09);
  }

  & section {
    width: 308px;
    height: 1px;
    background: rgba(96, 95, 95, 0.1);
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  & > div {
    display: flex;
    width: 308px;
    justify-content: space-between;
    align-items: flex-start;

    & h1 {
      max-width: 180px;
      word-wrap: break-word;
      flex-shrink: 0;
      color: ${({ theme }) => theme.colors.primary1};
      font: ${({ theme }) => theme.fonts.body2};
      line-height: 136.5%;
      letter-spacing: -0.32px;
    }

    & div {
      display: flex;
      align-items: center;
      gap: 4px;

      & h2 {
        color: ${({ theme }) => theme.colors.grey3};
        font: ${({ theme }) => theme.fonts.caption};
        letter-spacing: -0.26px;
      }
    }
  }

  & p {
    width: 308px;
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  width: 308px;
  align-items: flex-start;
  gap: 4px;

  & svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  & h1 {
    width: 280px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.grey2};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;
