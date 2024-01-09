import { ToastBody } from '@components/common';
import { useCopyClipBoard } from '@hooks/useCopyClipBoard';
import { useCustomToast } from '@hooks/useCustomToast';
import { useDetailNavigation } from '@hooks/useDetailNavigation';
import * as S from '@styles/components/reput/writtenContent.styles';
import { formatDate } from '@utils/date';
import { WrittenReviewItem } from '_types/reput';
import { Button, Fonts, ReputCard, svgNote } from 'referlink-ui';

type Props = {
  reviews: WrittenReviewItem[];
};

export const WrittenContent = ({ reviews }: Props) => {
  const { detailNavigation } = useDetailNavigation();
  const { info } = useCustomToast();

  const [_, onCopy] = useCopyClipBoard();

  const onClickInvite = () => {
    const currentUrl = window.location.href;
    onCopy(currentUrl).then((result) => {
      if (result)
        info(
          <ToastBody
            boldText="초대 URL"
            mainText="이 복사되었습니다."
            subText="붙여넣기하여 레퍼링크 평판 작성을 요청해보세요!"
          />,
        );
    });
  };
  return (
    <S.Wrapper>
      <S.Header>
        <h1>내가 작성한 평판</h1>

        <Button
          buttonText="초대하기"
          isIcon
          svgIcon={svgNote}
          width="138px"
          height="52px"
          fontStyle={Fonts.subtitle2}
          px="20px"
          py="10px"
          onClick={onClickInvite}
        />
      </S.Header>

      <S.Main>
        {reviews.map((review) => (
          <ReputCard
            mainContent={`${review.openComment}`}
            headContent={`${review.name}/${review.companyName}/${review.role}`}
            date={formatDate(review.createdAt)}
            key={review.id}
            isChecked={review.isVisible}
            onClick={() => detailNavigation('/myreput', String(review.id))}
          />
        ))}
      </S.Main>
    </S.Wrapper>
  );
};
