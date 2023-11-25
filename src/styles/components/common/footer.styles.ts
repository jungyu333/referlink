import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.grey1};
  width: 1440px;
  height: 296px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0 163px;

  & main {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    margin-top: 40px;
  }
`;

export const TextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  & > div {
    color: ${({ theme }) => theme.colors.grey2};
    text-align: left;
    font: ${({ theme }) => theme.fonts.caption};
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.grey2};
  text-align: left;
  font: ${({ theme }) => theme.fonts.caption};
`;

export const InputContainer = styled.form`
  display: inline-flex;
  align-items: flex-start;
  gap: 16px;
  position: absolute;
  right: 163px;
  top: 36px;
`;

export const Subscribe = styled.div`
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
    font: ${({ theme }) => theme.fonts.body};
    position: relative;
  }
`;
