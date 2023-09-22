import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & main {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 63px;
  }
`;

export const HeaderContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 74px;
  margin-left: 162px;
  & h1 {
    color: ${({ theme }) => theme.colors.grey2};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
    line-height: 35.04px;
  }
`;

export const WriterInforContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-left: 162px;
  margin-top: 66px;

  & h2 {
    color: ${({ theme }) => theme.colors.error};
    text-align: center;
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 31px;
`;

export const Line = styled.div`
  width: 1116px;
  height: 1px;
  background: rgba(96, 95, 95, 0.35);
`;

export const Badge = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary1};

  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts.subtitle1};
  letter-spacing: -0.4px;
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

export const ReputConatainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  padding: 0 162px;
`;

export const DisclosureContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  height: 211px;

  // margin-left: 162px;

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
    background: ${({ theme }) => theme.colors.grey5};

    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
`;

export const NondisclosureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 91px;
  & h1 {
    width: 738px;
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle1};

    letter-spacing: -0.4px;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 1025px;
  height: 92px;

  & h2 {
    width: 738px;
    padding: 0 6px;
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle2};
    letter-spacing: -0.36px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

export const Select = styled.div<{ $isPrimary?: boolean }>`
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.grey5};
  color: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.colors.primary2 : theme.colors.grey1};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
`;
