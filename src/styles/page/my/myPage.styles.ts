import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-top: 100px;
  margin-bottom: 164px;
  width: 700px;
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
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  & h1 {
    color: ${({ theme }) => theme.colors.gray4};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
  }

  & h2 {
    color: ${({ theme }) => theme.colors.gray3};
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
