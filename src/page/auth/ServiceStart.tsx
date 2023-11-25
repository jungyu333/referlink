import { emailRegex } from '@constant/regex';
import { useForm } from 'react-hook-form';
import {
  Button,
  EmailInput,
  GoogleButton,
  LineText,
  svgLogo,
} from 'referlink-ui';
import { EmailFormData } from '_types/auth';
import { useEffect, useState } from 'react';
import * as S from '@styles/page/auth/serviceStart.styles';
import { useApi } from '@hooks/useApi';
import { checkMember } from 'api';
import useCustomToast from '@hooks/useCustomToast';
import { ToastBody } from '@components/common';
import useDetailNavigation from '@hooks/useDetailNavigation';

export const ServiceStart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<EmailFormData>();

  const { info } = useCustomToast();

  const { execute } = useApi(checkMember);

  const { branchNavigation } = useDetailNavigation();

  const onValid = async (formData: EmailFormData) => {
    const { email } = formData;

    const responseOrError = await execute({
      email,
    });

    if (responseOrError instanceof Error) {
      info(<ToastBody subText="잘못된 요청입니다." />);
    } else {
      branchNavigation('/signin', '/agree', responseOrError.data.isExist);
    }
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

            <LineText label="SNS 간편 로그인" />

            <GoogleButton
              buttonText="Google로 계속하기"
              onClick={() => console.log('click')}
            />
          </S.BottomSection>
        </S.InputContainer>
      </S.Main>
    </S.Wrapper>
  );
};
