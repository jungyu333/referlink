import { ReactComponent as LogoSVG } from '@styles/images/svg/logo.svg';
import * as S from '@styles/components/common/footer.styles';
import { Button } from '@components/common/button';
import { EmailInput } from '@components/common/input';
import { useForm } from 'react-hook-form';
import { emailRegex } from '@constant/regex';
import { fonts } from '@styles/theme';
import { IFooterFormData } from '_types/common';

export const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFooterFormData>();

  const onValid = (formData: IFooterFormData) => {
    console.log(formData);
  };

  return (
    <S.Wrapper>
      <main>
        <LogoSVG />
        <S.TextContainer>
          <S.HeaderText>
            <div>
              (주)세레모니ㅣ사업자 등록 번호: 139-81-66648ㅣ상호: 크릭ㅣ대표:
              장준영
            </div>
            <div>통신판매: 제 2021-경기안산-1898호</div>
            <div>대표전화: 070-4177-0824ㅣ대표메일: complete@yourcric.com</div>
          </S.HeaderText>
          <S.Text>ⓒ 2021 (주)세레모니 All rights reserved.</S.Text>
        </S.TextContainer>
      </main>

      <S.InputContainer>
        <EmailInput
          placeholder="이메일을 입력해주세요"
          isLabel={false}
          label=""
          register={register('email', {
            pattern: {
              value: emailRegex,
              message: '형식에 맞지 않는 이메일입니다.',
            },
            required: '이메일을 입력해주세요.',
          })}
          width="265px"
          height="48px"
        />
        <Button
          buttonText="구독하기"
          width="90px"
          height="48px"
          px="16px"
          py="12px"
          fontStyle={fonts.body}
          onClick={handleSubmit(onValid)}
        />
      </S.InputContainer>
    </S.Wrapper>
  );
};
