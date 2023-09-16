import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from '@styles/components/common/input/emailInput.styles';

type Props = {
  label: string;
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn;
};

export const EmailInput = ({ label, placeholder, error, register }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Input>
      <S.InnerContainer $isFocused={isFocused} $isError={error ? true : false}>
        <label>{label}</label>
        <div>
          <input
            onFocus={() => setIsFocused(true)}
            {...register}
            onBlur={() => setIsFocused(false)}
            autoComplete="off"
            type="email"
            placeholder={placeholder}
          />
        </div>
      </S.InnerContainer>

      {error && <S.Validation>{error}</S.Validation>}
    </S.Input>
  );
};
