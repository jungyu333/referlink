import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  background-color: ${({ theme }) => theme.colors.grey5};
  width: 100%;
  padding: 0 162px;
  padding-top: 90px;
  padding-bottom: 45px;
  & h1 {
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }

  & main {
    display: inline-flex;
    padding: 40px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    align-self: center;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  & section {
    width: 700px;
    height: 1px;
    background: rgba(96, 95, 95, 0.35);
  }
`;

export const AvatarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 327px;
`;

export const Information = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
`;

export const UploadContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;

  & svg {
    cursor: pointer;
  }

  & input {
    display: none;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  object-fit: cover;
  background: lightgray 50%;
`;

export const NoAvatar = styled(Avatar)`
  background: url() lightgray 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
  }

  & h2 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle2};
    letter-spacing: -0.36px;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 56px;
`;

export const InputContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  & section {
    display: flex;
    align-items: flex-start;
    gap: 40px;
  }
`;
