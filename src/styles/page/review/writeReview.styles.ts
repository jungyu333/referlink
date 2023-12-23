import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 189px;
  padding-top: 103px;
  padding-bottom: 156px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey5};
`;

export const Review = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;

  & h1 {
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }
`;

export const Infomation = styled.section`
  display: flex;
  /* height: 618px; */
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  & h2 {
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 1116px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};

  & > section {
    display: flex;
    /* height: 604px; */
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const OpenSection = styled.div`
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

export const TextAreaContainer = styled.div<{ $error: string | undefined }>`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};

  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
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
    width: 1052px;
    height: 170px;
    padding: 20px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 16px;
    resize: none;
    border: none;
    outline: 1px solid
      ${({ theme, $error }) =>
        $error ? theme.colors.error : theme.colors.grey1};
    &:focus {
      outline: 1px solid
        ${({ theme, $error }) =>
          $error ? theme.colors.error : theme.colors.primary1};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey1};
      font: ${({ theme }) => theme.fonts.body};
      letter-spacing: -0.32px;
    }
  }

  & span {
    display: flex;
    align-items: center;
    align-self: stretch;

    color: ${({ theme }) => theme.colors.error};
    font: ${({ theme }) => theme.fonts.caption};
    letter-spacing: -0.26px;
  }
`;

export const SelectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.subtitle1};
    letter-spacing: -0.4px;
  }

  & section {
    display: flex;
    width: 1116px;
    padding: 40px 32px;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
  }
`;
