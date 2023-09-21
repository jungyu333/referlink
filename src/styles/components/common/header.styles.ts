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
  width: 166px;
  height: 40px;
  position: absolute;
  left: 162px;
  top: 20px;
  overflow: hidden;
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

export const PassReputation = styled.div`
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

export const ButtonText = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  text-align: left;
  position: relative;
  cursor: pointer;
`;

export const MyPageButton = styled.div`
  border-radius: 8px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.grey1};
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
