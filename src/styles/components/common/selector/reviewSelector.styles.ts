import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  & h2 {
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle2};
    letter-spacing: -0.36px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

export const SelectMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 33px;

  & span {
    width: 1px;
    height: 84px;
    background: rgba(96, 95, 95, 0.1);
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 33px;
  }
`;

export const SelectLabel = styled.div`
  max-width: 105px;
  word-break: break-all;
  color: ${({ theme }) => theme.colors.black};
  font: ${({ theme }) => theme.fonts.body2};
  line-height: 1.5;
  letter-spacing: -0.32px;
`;
