import styled from 'styled-components';

export const Button = styled.div<{ $isShare: boolean }>`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: ${({ theme, $isShare }) =>
    $isShare ? `1px solid ${theme.colors.grey1}` : 'none'};
  background: ${({ theme, $isShare }) =>
    $isShare ? theme.colors.white : theme.colors.primary1};
  width: 177px;
  height: 52px;
  cursor: pointer;

  color: ${({ theme, $isShare }) =>
    $isShare ? theme.colors.grey4 : theme.colors.white};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
`;
