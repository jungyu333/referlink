import { useForm } from 'react-hook-form';
import { WriteReviewFormData } from '_types/reput';
import { emailRegex } from '@constant/regex';
import * as S from '@styles/page/review/writeReview.styles';
import { Button, CheckBox, EmailInput, Fonts, TextInput } from 'referlink-ui';
import { useState } from 'react';
import { ReviewSelector } from '@components/common';
import { useCustomQuery } from '@hooks/useCustomQuery';
import { getSurveyList } from '@api/review';

export const WriteRiview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriteReviewFormData>();

  const [isAnonymous, setIsAnonymous] = useState(false);

  const {
    data: surveyList,
    isLoading,
    error,
  } = useCustomQuery(['getSurveyList'], getSurveyList);

  const [survey, setServey] = useState<{ [key: string]: number }>({
    1: 2,
    2: 0,
  });

  const handleCheck = (groupIndex: number, checkboxIndex: number) => {
    setServey((prev) => ({ ...prev, [groupIndex]: checkboxIndex }));
  };

  const mock = [
    { surveyId: 1, category: '평소성향' },
    { surveyId: 2, category: '평소성향' },
  ];

  return (
    <S.Wrapper>
      <S.Review>
        <h1>평판 작성</h1>

        <S.Infomation>
          <h2>작성자 정보를 입력해주세요</h2>

          <S.InputContainer>
            <section>
              <TextInput
                label="이름"
                placeholder="이름을 작성해주세요."
                error={errors.name?.message}
                width="1052px"
                register={register('name', {
                  maxLength: {
                    value: 10,
                    message: '10자 이내로 입력해주세요.',
                  },
                  required: '이름을 입력해주세요.',
                })}
              />

              <EmailInput
                register={register('email', {
                  pattern: {
                    value: emailRegex,
                    message: '형식에 맞지 않는 이메일입니다.',
                  },
                  required: '이메일을 입력해주세요.',
                })}
                label="이메일 (레퍼런스 체크를 위한 연락이 올 수 있습니다)"
                placeholder="ex) example@email.com"
                width="1052px"
                error={errors.email?.message}
              />

              <TextInput
                label="회사명"
                placeholder="회사명을 입력해주세요."
                error={errors.company?.message}
                width="1052px"
                register={register('company', {
                  maxLength: {
                    value: 10,
                    message: '10자 이내로 입력해주세요.',
                  },
                  required: '회사명을 입력해주세요.',
                })}
              />

              <TextInput
                register={register('job', {
                  maxLength: {
                    value: 10,
                    message: '10자 이내로 입력해주세요.',
                  },
                  required: '직무를 입력해주세요.',
                })}
                label="직무"
                placeholder="직무를 입력해주세요"
                width="1052px"
                error={errors.job?.message}
              />

              <CheckBox
                label="익명"
                onCheck={() => setIsAnonymous(!isAnonymous)}
                isChecked={isAnonymous}
              />
            </section>
          </S.InputContainer>
        </S.Infomation>

        <S.OpenSection>
          <h1>1. 전체공개 평판 내역입니다.</h1>
          <S.TextAreaContainer>
            <div>
              <h2>
                <b>1-1. </b>지원자님의 장/단점을 작성해주세요.
              </h2>
              <textarea placeholder="지원자님에 대한 솔직한 의견을 작성해주세요" />
            </div>
          </S.TextAreaContainer>
        </S.OpenSection>

        <S.SelectSection>
          <h1>2. 기업 채용담당자만 확인할 수 있는 내역입니다.</h1>
          <section>
            {mock.map((surveyItem) => (
              <ReviewSelector
                key={surveyItem.surveyId}
                question="지원자의 사교성에 대해 어떻게 평가하시나요?"
                tendency1="외향적"
                tendency2="내향적"
                isChecked={survey[surveyItem.surveyId]}
                surveyId={surveyItem.surveyId}
                onCheck={handleCheck}
              />
            ))}
          </section>
        </S.SelectSection>
      </S.Review>

      <Button
        buttonText="평판 작성 완료하기"
        px="36px"
        py="24px"
        width="225px"
        height="68px"
        fontStyle={Fonts.subtitle1}
      />
    </S.Wrapper>
  );
};
