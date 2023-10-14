import { fonts } from '@styles/theme';
import { styled } from 'styled-components';

type Props = {
  buttonText: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  isPrimary?: boolean;
  px?: string;
  py?: string;
  fontStyle?: string;
};

export const Button = ({
  buttonText,
  onClick,
  isPrimary = true,
  width = '400px',
  height = '58px',
  px = '24px',
  py = '26px',
  fontStyle = fonts.subtitle2,
}: Props) => {
  return (
    <ButtonWrapper
      $width={width}
      $height={height}
      $isPrimary={isPrimary}
      onClick={onClick}
      $px={px}
      $py={py}
      $fontStyle={fontStyle}
    >
      {buttonText}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{
  $isPrimary: boolean;
  $width: string;
  $height: string;
  $px: string;
  $py: string;
  $fontStyle: string;
}>`
  display: flex;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: ${({ $py }) => $py} ${({ $px }) => $px};
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.colors.primary1 : theme.colors.white};
  color: ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.colors.white : theme.colors.primary1};
  font: ${({ $fontStyle }) => $fontStyle};
  line-height: 150%;
  letter-spacing: -0.36px;
  border: ${({ $isPrimary, theme }) =>
    !$isPrimary
      ? `1px solid ${theme.colors.grey1}`
      : `1px solid ${theme.colors.primary1} `};
  cursor: pointer;
`;
