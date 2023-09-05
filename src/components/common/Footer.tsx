import { styled } from 'styled-components';
import { ReactComponent as LogoSVG } from '@styles/images/svg/logo.svg';

export const Footer = () => {
  return (
    <Wrapper>
      <TextContainer>
        <HeaderText>
          <div>
            (주)세레모니ㅣ사업자 등록 번호: 139-81-66648ㅣ상호: 크릭ㅣ대표:
            장준영
          </div>
          <div>통신판매: 제 2021-경기안산-1898호</div>
          <div>대표전화: 070-4177-0824ㅣ대표메일: complete@yourcric.com</div>
        </HeaderText>
        <Text>ⓒ 2021 (주)세레모니 All rights reserved.</Text>
      </TextContainer>

      <InputContainer>
        <EmailInput>
          <input type="email" placeholder="이메일을 입력해주세요" />
        </EmailInput>
        <Subscribe>
          <div>구독하기</div>
        </Subscribe>
      </InputContainer>

      <Logo>
        <div>
          <LogoSVG />
        </div>
      </Logo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray1};
  border-width: 1px 0px 0px 0px;
  width: 1440px;
  height: 296px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  flex-shrink: 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 162px;
  top: 104px;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;

  & > div {
    color: ${({ theme }) => theme.colors.gray2};
    text-align: left;
    font: var(--caption, 400 13px/150% 'Noto Sans KR', sans-serif);
    position: relative;
  }
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.gray2};
  text-align: left;
  font: var(--caption, 400 13px/150% 'Noto Sans KR', sans-serif);
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 907px;
  top: calc(50% - 108px);
`;

const EmailInput = styled.div`
  & input {
    display: flex;
    width: 265px;
    height: 40px;
    padding: 10px 16px;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    border: 1px solid var(--grey1, rgba(96, 95, 95, 0.35));
  }
`;

const Subscribe = styled.div`
  background: ${({ theme }) => theme.colors.primary1};
  border-radius: 8px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary1};
  border-width: 1px;
  padding: 10px 16px 10px 16px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 40px;
  position: relative;
  cursor: pointer;

  & div {
    color: ${({ theme }) => theme.colors.white};
    text-align: left;
    font: var(--body, 400 16px/130% 'Noto Sans KR', sans-serif);
    position: relative;
  }
`;

const Logo = styled.div`
  width: 166px;
  height: 40px;
  position: absolute;
  left: 162px;
  top: 40px;
  overflow: hidden;

  & div {
    position: absolute;
    inset: 0;
  }
`;
