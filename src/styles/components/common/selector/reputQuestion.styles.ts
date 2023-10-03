import styled from 'styled-components';

export const QuestionContainer = styled.div`
  display: flex;
  width: 1116px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.09);

  & h2 {
    width: 738px;
    padding: 0 6px;
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle2};
    letter-spacing: -0.36px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;

  & :first-child,
  & :last-child {
    border: 1px solid ${({ theme }) => theme.colors.primary1};
  }
`;

export const Select = styled.div<{ $isPrimary?: boolean }>`
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.grey5};
  color: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.colors.primary2 : theme.colors.grey1};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
`;
