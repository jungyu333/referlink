import styled from 'styled-components';

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 1025px;
  height: 92px;

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
`;

export const Select = styled.div<{ $isPrimary?: boolean }>`
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.grey5};
  color: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.colors.primary2 : theme.colors.grey1};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
`;
