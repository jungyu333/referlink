import { emailRegex } from '@constant/regex';
import { useForm } from 'react-hook-form';
import { Button, EmailInput, svgLogo } from 'referlink-ui';
import { ReactComponent as GoogleSVG } from '@styles/images/svg/google.svg';
import { IEmailFormData } from '_types/auth';
import { useEffect, useState } from 'react';
import * as S from '@styles/page/auth/serviceStart.styles';

export const ServiceStart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IEmailFormData>();

  const onValid = (formData: IEmailFormData) => {
    console.log(formData);
  };

  const emailValue = watch('email');

  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    setIsDisable(!emailValue);
  }, [emailValue]);

  return (
    <S.Wrapper>
      <S.Main>
        <section>
          <S.Header>
            {svgLogo}

            <h1>레퍼링크 시작하기</h1>
          </S.Header>
        </section>

        <S.InputContainer>
          <EmailInput
            label="이메일 주소"
            placeholder="이메일을 입력해주세요."
            width="400px"
            register={register('email', {
              pattern: {
                value: emailRegex,
                message: '형식에 맞지 않는 이메일입니다.',
              },
              required: '이메일을 입력해주세요.',
            })}
            error={errors.email?.message}
          />
          <S.BottomSection>
            <Button
              buttonText="다음"
              px="36px"
              py="24px"
              isDisabled={isDisable}
              onClick={handleSubmit(onValid)}
            />
            <S.LineText>
              <div />
              SNS 간편 로그인
              <div />
            </S.LineText>

            <S.OnGoogle>
              <GoogleSVG />
              <div>Google로 계속하기</div>
            </S.OnGoogle>
          </S.BottomSection>
        </S.InputContainer>
      </S.Main>
    </S.Wrapper>
  );
};