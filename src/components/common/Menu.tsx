import * as S from '@styles/components/common/menu.styles';

type Props = {
  mainText: string;
  subText?: string;
};

export const Menu = ({ mainText, subText }: Props) => {
  return (
    <S.Wrapper>
      <h1>
        {mainText}
        {subText && <b>({subText})</b>}
      </h1>
    </S.Wrapper>
  );
};
