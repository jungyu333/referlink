import { styled } from 'styled-components';

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 400px;
  height: 248px;
  border-radius: 8px;
  padding: 0 16px;
  & button {
    padding: 0;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(96, 95, 95, 0.35);
  margin-bottom: 4px;
`;

export const Terms = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
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
`;

export const View = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  cursor: pointer;
`;
