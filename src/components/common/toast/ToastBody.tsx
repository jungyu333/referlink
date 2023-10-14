import * as S from '@styles/components/common/toast/toastBody.styles';

type Props = {
  boldText?: string;
  mainText?: string;
  subText?: string;
};

export const ToastBody = ({
  boldText = '',
  mainText = '',
  subText = '',
}: Props) => {
  return (
    <>
      {(boldText || mainText) && (
        <S.Header>
          <b>{boldText}</b>
          {mainText}
        </S.Header>
      )}
      <S.SubText>{subText}</S.SubText>
    </>
  );
};
