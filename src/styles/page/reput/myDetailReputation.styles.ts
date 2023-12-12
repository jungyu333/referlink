import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 80px;
  align-items: center;
  padding: 103px 162px 82px 162px;
  background-color: ${({ theme }) => theme.colors.grey5};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`;

export const HeadLine = styled.section`
  display: flex;
  align-items: center;

  & section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;

    & div {
      display: flex;
      align-items: center;
      gap: 8px;

      & h2 {
        color: ${({ theme }) => theme.colors.grey2};
        font: ${({ theme }) => theme.fonts.subtitle1};
        letter-spacing: -0.4px;
      }
    }

    & h1 {
      color: ${({ theme }) => theme.colors.grey3};
      font: ${({ theme }) => theme.fonts.headline1};
      letter-spacing: -0.68px;

      & b {
        color: ${({ theme }) => theme.colors.primary1};
      }
    }
  }
`;

export const Warning = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;

  & p {
    color: ${({ theme }) => theme.colors.error};
    text-align: center;
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
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
