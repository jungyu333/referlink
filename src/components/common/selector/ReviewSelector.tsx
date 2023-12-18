import { Handler, ReputCheckBox } from 'referlink-ui';
import * as S from '@styles/components/common/selector/reviewSelector.styles';
import { reviewSelectorList } from '@constant/review';

type Props = {
  question: string;
  tendency1: string;
  tendency2: string;
  isChecked: number;
  priorityId: number;
  onCheck: Handler<(groupIndex: number, checkboxIndex: number) => void>;
};

export const ReviewSelector = ({
  question,
  tendency1,
  tendency2,
  isChecked,
  onCheck,
  priorityId,
}: Props) => {
  return (
    <S.SelectContainer>
      <h2>
        <b>2-{++priorityId}.</b> {question}
      </h2>

      <S.SelectMain>
        <S.SelectLabel>{tendency1}</S.SelectLabel>

        {reviewSelectorList.map((item) =>
          item.id !== -1 ? (
            <ReputCheckBox
              key={item.id}
              label={item.label}
              isChecked={isChecked === item.priority}
              onCheck={() => onCheck(--priorityId, item.id)}
            />
          ) : (
            <span key={item.id} />
          ),
        )}

        <S.SelectLabel>{tendency2}</S.SelectLabel>
      </S.SelectMain>
    </S.SelectContainer>
  );
};
