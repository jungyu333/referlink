import { styled } from 'styled-components';

type Props = {
  buttonText: string;
  width?: string;
  onClick?: () => void;
  isPrimary?: boolean;
};

export const Button = ({
  buttonText,
  onClick,
  isPrimary = true,
  width = '400px',
}: Props) => {
  return (
    <ButtonWrapper $width={width} $isPrimary={isPrimary} onClick={onClick}>
      {buttonText}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ $isPrimary: boolean; $width: string }>`
  display: flex;
  width: ${({ $width }) => $width};
  height: 58px;
  padding: 24px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.colors.primary1 : theme.colors.white};
  color: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.colors.white : theme.colors.primary1};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
  border: ${({ $isPrimary, theme }) =>
    $isPrimary ? 'none' : `1px solid ${theme.colors.primary1} `};
  cursor: pointer;
`;
