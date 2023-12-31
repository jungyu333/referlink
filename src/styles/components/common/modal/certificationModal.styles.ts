import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
`;

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 38px;

  & h1 {
    width: 538px;
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }

  & p {
    width: 538px;
    color: ${({ theme }) => theme.colors.grey2};
    font: ${({ theme }) => theme.fonts.subtitle2};
    letter-spacing: -0.36px;
  }
`;

export const Line = styled.section`
  width: 663px;
  height: 1px;
  background: rgba(96, 95, 95, 0.35);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  & > input {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: center;
`;
