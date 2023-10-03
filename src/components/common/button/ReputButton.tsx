import { ReactComponent as ShareSVG } from '@styles/images/svg/octicon_share-16.svg';
import { ReactComponent as NoteSVG } from '@styles/images/svg/mdi_note-edit.svg';
import * as S from '@styles/components/common/button/reputButton.styles';

type Props = {
  text: string;
  isShare?: boolean;
};

export const ReputButton = ({ text, isShare = false }: Props) => {
  return (
    <S.Button $isShare={isShare}>
      {isShare ? <ShareSVG /> : <NoteSVG />}
      {text}
    </S.Button>
  );
};
