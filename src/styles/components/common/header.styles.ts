import { styled } from 'styled-components';

export const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.white};
  width: 1440px;
  height: 80px;
  position: relative;
  box-shadow: 0px 5px 100px 0px rgba(96, 95, 95, 0.05);
  overflow: hidden;
  margin: 0 auto;
`;

export const Logo = styled.div`
  position: absolute;
  left: 162px;
  top: 20px;
  cursor: pointer;
`;

export const AcceptReputation = styled.div`
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

export const PassReputation = styled(AcceptReputation)`
  left: 508px;
  top: calc(50% - 18px);
`;

export const ButtonText = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  text-align: left;
  position: relative;
  cursor: pointer;
`;

export const MyPageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 1148px;
  top: calc(50% - 20px);
`;
