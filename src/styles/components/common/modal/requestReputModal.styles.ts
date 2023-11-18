import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 628px;
  padding: 50px 24px;
  justify-content: center;
  align-items: flex-end;
  align-content: flex-end;
  gap: 12px 467px;
  flex-wrap: wrap;
  position: relative;

  & h1 {
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
  }

  & svg:first-child {
    width: 72px;
    height: 72px;
    flex-shrink: 0;
  }

  & > div {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 14px;
    top: 4px;
    cursor: pointer;

    & > svg:last-child {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Content = styled.form`
  display: flex;
  padding: 10px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  & section:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  & section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;
