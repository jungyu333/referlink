import { emailRegex } from '@constant/regex';
import { useForm } from 'react-hook-form';
import { Button, EmailInput, svgLogo } from 'referlink-ui';
import styled from 'styled-components';
import { ReactComponent as GoogleSVG } from '@styles/images/svg/google.svg';
import { IEmailFormData } from '_types/auth';
import { useEffect, useState } from 'react';

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
    <Wrapper>
      <Main>
        <section>
          <Header>
            {svgLogo}

            <h1>레퍼링크 시작하기</h1>
          </Header>
        </section>

        <InputContainer>
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
          <BottomSection>
            <Button
              buttonText="다음"
              px="36px"
              py="24px"
              isDisabled={isDisable}
              onClick={handleSubmit(onValid)}
            />
            <LineText>
              <div />
              SNS 간편 로그인
              <div />
            </LineText>

            <OnGoogle>
              <GoogleSVG />
              <div>Google로 계속하기</div>
            </OnGoogle>
          </BottomSection>
        </InputContainer>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey5};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  display: inline-flex;
  padding: 100px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};
  margin-top: 87px;
  margin-bottom: 143px;

  box-shadow: 0px 3px 40px 0px rgba(0, 0, 0, 0.05);

  & section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const LineText = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  & div {
    width: 113px;
    height: 1px;
    background: rgba(96, 95, 95, 0.35);
  }
`;

const OnGoogle = styled.button`
  display: flex;
  padding: 13px 118px 13px 24px;
  align-items: center;
  gap: 94px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  width: 400px;
  color: ${({ theme }) => theme.colors.grey3};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
`;
