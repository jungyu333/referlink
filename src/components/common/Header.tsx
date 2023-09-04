import { ReactComponent as LogoSVG } from '@styles/images/svg/logo.svg';
import { ReactComponent as MyPageSVG } from '@styles/images/svg/mypage.svg';
import { styled } from 'styled-components';

export const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <LogoSVG />
      </Logo>

      <AcceptReputation>
        <ButtonText>내가 받은 평판</ButtonText>
      </AcceptReputation>
      <PassReputation>
        <ButtonText>내가 작성한 평판</ButtonText>
      </PassReputation>

      <MyPageButton>
        <MyPageSVG />
        <ButtonText>마이페이지</ButtonText>
      </MyPageButton>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.white};
  width: 1440px;
  height: 80px;
  position: relative;
  box-shadow: 0px 5px 100px 0px rgba(96, 95, 95, 0.05);
  overflow: hidden;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 166px;
  height: 40px;
  position: absolute;
  left: 162px;
  top: 20px;
  overflow: hidden;
`;

const AcceptReputation = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 370px;
  top: calc(50% - 18px);
`;

const PassReputation = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 508px;
  top: calc(50% - 18px);
`;

const ButtonText = styled.div`
  color: ${({ theme }) => theme.colors.gray3};
  text-align: left;
  position: relative;
  cursor: pointer;
`;

const MyPageButton = styled.div`
  border-radius: 8px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray1};
  border-width: 1px;
  padding: 10px 16px 10px 16px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: center;
  height: 40px;
  position: absolute;
  left: 1148px;
  top: calc(50% - 20px);
`;
