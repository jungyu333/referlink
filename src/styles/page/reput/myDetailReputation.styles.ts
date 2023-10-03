import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 80px;
  align-items: center;
  padding-top: 90px;
  padding-bottom: 177px;
  background-color: ${({ theme }) => theme.colors.grey5};

  & header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  & main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;

  & section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
  }

  & p {
    display: flex;
    width: 1116px;
    padding: 20px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.09);

    color: ${({ theme }) => theme.colors.error};
    text-align: center;
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 590px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 24px;
  color: ${({ theme }) => theme.colors.grey2};
  font: ${({ theme }) => theme.fonts.subtitle1};
  letter-spacing: -0.4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const Button = styled.div`
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary1};
  width: 177px;
  height: 64px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
`;

export const WriterInforContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
  }
`;

export const Information = styled.div`
  display: flex;
  width: 1116px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.09);
`;

export const InforTable = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 56px;
`;

export const InforItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: ${({ theme }) => theme.colors.grey3};
  & h3 {
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }

  & h4 {
    font: ${({ theme }) => theme.fonts.subtitle3};
    letter-spacing: -0.36px;
  }
`;

export const DisclosureContainer = styled.div`
  display: flex;
  height: 211px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const Disclosure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  & h1 {
    width: 738px;
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle1};
    letter-spacing: -0.4px;
  }

  & p {
    display: flex;
    width: 1116px;
    padding: 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.white};

    box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.09);

    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;

  & svg {
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }
`;

export const NonDisclosureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  & h1 {
    width: 738px;
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle1};

    letter-spacing: -0.4px;
  }
`;
