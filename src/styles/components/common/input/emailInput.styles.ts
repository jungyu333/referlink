import { styled } from 'styled-components';

export const Input = styled.div<{ $width: string }>`
  display: flex;
  width: ${({ $width }) => $width};
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const InnerContainer = styled.div<{
  $isFocused: boolean;
  $isError: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  position: relative;
  & label {
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 10px;
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.subtitle2};
    letter-spacing: -0.36px;
  }

  & > div {
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid
      ${({ theme, $isFocused, $isError }) => {
        if ($isError) return theme.colors.error;
        if ($isFocused) return theme.colors.primary1;
        return theme.colors.grey1;
      }};
    height: 56px;
    font: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.grey4};
    letter-spacing: -0.32px;
  }

  & input {
    &::placeholder {
      color: ${({ theme }) => theme.colors.grey1};
      font: ${({ theme }) => theme.fonts.body};
      letter-spacing: -0.32px;
    }

    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    flex-grow: 1;
    border: none;
    height: 100%;
    &:focus {
      outline: none;
    }
  }
`;

export const Validation = styled.span`
  display: flex;
  align-items: center;
  align-self: stretch;

  color: ${({ theme }) => theme.colors.error};
  font: ${({ theme }) => theme.fonts.caption};
  letter-spacing: -0.26px;
`;
