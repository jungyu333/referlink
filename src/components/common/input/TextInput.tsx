import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from '@styles/components/common/input/textInput.styles';

type Props = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  width?: string;
  isLabel?: boolean;
};

export const TextInput = ({
  label,
  placeholder,
  error,
  register,
  width = '400px',
  isLabel = true,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Input $width={width}>
      <S.InnerContainer $isFocused={isFocused} $isError={error ? true : false}>
        {isLabel && <label>{label}</label>}
        <div>
          <input
            onFocus={() => setIsFocused(true)}
            {...register}
            onBlur={() => setIsFocused(false)}
            type="text"
            autoComplete="off"
            placeholder={placeholder}
          />
        </div>
      </S.InnerContainer>

      {error && <S.Validation>{error}</S.Validation>}
    </S.Input>
  );
};
