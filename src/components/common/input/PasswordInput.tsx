import { styled } from 'styled-components';
import { ReactComponent as EyeSVG } from '@styles/images/svg/eye.svg';
import { ReactComponent as CloseEyeSVG } from '@styles/images/svg/closeeye.svg';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useState } from 'react';
import * as S from '@styles/components/common/input/passwordInput.styles';

type Props = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
};

export const PasswordInput = ({
  label,
  placeholder,
  register,
  error,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassWord, setIsShowPassWord] = useState(false);

  return (
    <S.Input>
      <S.InnerContainer $isFocused={isFocused} $isError={error ? true : false}>
        <label>{label}</label>
        <div>
          <input
            onFocus={() => setIsFocused(true)}
            {...register}
            onBlur={() => setIsFocused(false)}
            type={isShowPassWord ? 'text' : 'password'}
            placeholder={placeholder}
          />

          <span onClick={() => setIsShowPassWord((prev) => !prev)}>
            {!isShowPassWord ? <CloseEyeSVG /> : <EyeSVG />}
          </span>
        </div>
      </S.InnerContainer>

      {error && <S.Validation>{error}</S.Validation>}
    </S.Input>
  );
};
