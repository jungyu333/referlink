import { styled } from 'styled-components';

export const TermsContainer = styled.div`
  width: 400px;
  height: 248px;
  border-radius: 8px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  position: relative;
`;

export const AllTerms = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 20px;
  left: 16px;
  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;

  & svg {
    cursor: pointer;
  }
`;

export const Line = styled.div`
  width: 399px;
  height: 1px;
  background: rgba(96, 95, 95, 0.35);
  position: absolute;
  top: 64px;
`;

export const Terms = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: absolute;
  top: 84px;
  left: 16px;
`;

export const TermItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 368px;
`;

export const TermContent = styled.div<{ $isOptional: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;

  & h2 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;

    & b {
      color: ${({ theme, $isOptional }) =>
        $isOptional ? theme.colors.grey1 : theme.colors.primary1};
    }
  }

  & svg {
    cursor: pointer;
  }
`;

export const View = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  cursor: pointer;
`;
