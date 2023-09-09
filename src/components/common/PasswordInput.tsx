import { styled } from 'styled-components';
import { ReactComponent as EyeSVG } from '@styles/images/svg/eye.svg';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  isLabel?: boolean;
  error?: string;
};

export const PasswordInput = ({
  label,
  placeholder,
  register,
  error,
  isLabel = true,
}: Props) => {
  return (
    <Input>
      <InnerContainer>
        {isLabel && <label>{label}</label>}
        <input {...register} type="password" placeholder={placeholder} />

        <EyeSVG />
      </InnerContainer>

      {error && <Validation>{error}</Validation>}
    </Input>
  );
};

const Input = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  position: relative;
  & label {
    display: flex;
    align-items: center;
    align-self: stretch;

    color: ${({ theme }) => theme.colors.gray4};
    font: ${({ theme }) => theme.fonts.subtitle2};
  }

  & input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    height: 58px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray1};

    display: flex;
    padding: 10px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray1};
      font: ${({ theme }) => theme.fonts.body};
    }
  }

  & svg {
    position: absolute;
    left: 350px;
    top: 53px;
  }
`;

const Validation = styled.span`
  display: flex;
  align-items: center;
  align-self: stretch;

  color: ${({ theme }) => theme.colors.error};
  font: ${({ theme }) => theme.fonts.caption};
  letter-spacing: -0.26px;
`;
