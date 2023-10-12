import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from '@styles/components/common/input/emailInput.styles';

type Props = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  width?: string;
  height?: string;
  isLabel?: boolean;
};

export const EmailInput = ({
  label,
  placeholder,
  error,
  register,
  width = '400px',
  height = '56px',
  isLabel = true,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Input $width={width}>
      <S.InnerContainer
        $height={height}
        $isFocused={isFocused}
        $isError={error ? true : false}
      >
        {isLabel && <label>{label}</label>}
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
