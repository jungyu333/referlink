import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 162px;
  padding-top: 74px;
  padding-bottom: 148px;
`;

export const HeaderContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey2};
    font: ${({ theme }) => theme.fonts.headline2};
    line-height: 146%;
    letter-spacing: -0.48px;
  }
`;

export const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-top: 40px;

  & > div:last-child {
    display: flex;
    width: 1115px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    & div {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.colors.grey3};
      font: ${({ theme }) => theme.fonts.subtitle2};

      letter-spacing: -0.36px;
    }
  }
`;

export const ShortAnswerContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 33px;
  margin-top: 69px;

  & h1 {
    width: 738px;
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle1};
    letter-spacing: -0.4px;
  }
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  & h2 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle2};
    letter-spacing: -0.36px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }

  & textarea {
    display: flex;
    width: 1116px;
    height: 170px;
    padding: 32px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    border-radius: 16px;
    resize: none;
    border: 1px solid ${({ theme }) => theme.colors.grey1};
    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.primary1};
      border: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey1};
      font: ${({ theme }) => theme.fonts.body};
      letter-spacing: -0.32px;
    }
  }
`;

export const NondisclosureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 33px;
  margin-top: 56px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle1};
    width: 738px;
    letter-spacing: -0.4px;
  }

  & section {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const QuestionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  & h2 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle2};

    letter-spacing: -0.36px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;
