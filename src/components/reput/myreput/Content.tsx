import { useDetailNavigation } from '@hooks/useDetailNavigation';
import * as S from '@styles/components/reput/content.styles';
import { formatDate } from '@utils/date';
import { MyReviewItem } from '_types/reput';
import {
  Button,
  ButtonTypes,
  ReputCard,
  svgNote,
  svgShare,
} from 'referlink-ui';

type Props = {
  reviews: MyReviewItem[];
};

export const Content = ({ reviews }: Props) => {
  const { detailNavigation } = useDetailNavigation();

  return (
    <S.Wrapper>
      <S.Header>
        <h1>내가 받은 평판</h1>
        <div>
          <Button
            svgIcon={svgNote}
            width="177px"
            height="52px"
            px="20px"
            py="10px"
            buttonText="평판 작성 요청"
            isIcon
          />
          <Button
            buttonText="평판 공유하기"
            width="174px"
            height="52px"
            px="20px"
            py="10px"
            buttonType={ButtonTypes.outlined}
            svgIcon={svgShare}
            isIcon
          />
        </div>
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
