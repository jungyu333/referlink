import { ReactComponent as LogoSVG } from '@styles/images/svg/logo.svg';
import * as S from '@styles/components/common/footer.styles';

export const Footer = () => {
  return (
    <S.Wrapper>
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

      <S.InputContainer>
        <S.EmailInput>
          <input type="email" placeholder="이메일을 입력해주세요" />
        </S.EmailInput>
        <S.Subscribe>
          <div>구독하기</div>
        </S.Subscribe>
      </S.InputContainer>

      <S.Logo>
        <div>
          <LogoSVG />
        </div>
      </S.Logo>
    </S.Wrapper>
  );
};
