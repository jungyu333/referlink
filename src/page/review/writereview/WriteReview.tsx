import { useForm } from 'react-hook-form';
import { WriteReviewFormData } from '_types/reput';
import { emailRegex } from '@constant/regex';
import * as S from '@styles/page/review/writeReview.styles';
import {
  Button,
  CheckBox,
  EmailInput,
  Fonts,
  LoadingSpinner,
  TextInput,
} from 'referlink-ui';
import { useEffect, useState } from 'react';
import { ReviewSelector, ToastBody } from '@components/common';
import { useCustomQuery } from '@hooks/useCustomQuery';
import { createReview, getSurveyList } from '@api/review';
import { validationSelector } from '@utils/review';
import { useCustomToast } from '@hooks/useCustomToast';
import { getUserInfo } from '@api/my';
import { useCustomMutation } from '@hooks/useCustomMutation';
import { getErrorResponse } from '@utils/error';

export const WriteRiview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriteReviewFormData>();

  const [isVisible, setIsVisible] = useState(false);

  const { info } = useCustomToast();

  const {
    data: surveyList,
    isLoading,
    error,
  } = useCustomQuery(['getSurveyList'], getSurveyList, {
    refetchOnWindowFocus: false,
  });

  const {
    data: userInfo,
    isLoading: userInfoLoading,
    error: userInfoError,
  } = useCustomQuery(['userinfo'], getUserInfo, {
    refetchOnWindowFocus: false,
  });

  const createReviewMutation = useCustomMutation(createReview, {
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      const responseError = getErrorResponse(error);
      if (responseError.statusCode === 409) {
        info(<ToastBody subText={responseError.message} />);
      }
    },
  });

  const [survey, setServey] = useState<Record<number, number>>({});

  const handleCheck = (groupIndex: number, checkboxIndex: number) => {
    setServey((prev) => ({ ...prev, [groupIndex]: checkboxIndex }));
  };

  useEffect(() => {
    if (surveyList) {
      const initialPriorities: Record<number, number> =
        surveyList.data.surveyItems.reduce((acc, item) => {
          acc[item.surveyId] = 0;
          return acc;
        }, {} as Record<number, number>);

      setServey(initialPriorities);
    }
  }, [surveyList]);

  const submitReview = (formData: WriteReviewFormData) => {
    if (userInfo && surveyList) {
      if (validationSelector(surveyList.data.surveyItems.length, survey)) {
        const reviewItems = Object.entries(survey).map(([key, value]) => {
          return {
            reviewId: '1',
            surveyItemId: key,
            answer: String(value),
          };
        });

        const { email, companyName, name, prosAndCons, role } = formData;
        const json = {
          email,
          openComment: prosAndCons,
          name,
          companyName,
          role,
          isVisible: isVisible ? 1 : 0,
          reviewItems,
          surveyId: String(surveyList.data.id),
          writerId: userInfo.data.uid,
          //하드 코딩 a@naver.com uid
          targetId: 'vhcTvB9MR',
          career: '10',
        };

        console.log(json);

        createReviewMutation.mutate(json);
      } else {
        info('선택지를 모두 체크해주세요.');
      }
    }
  };

  return (
    <LoadingSpinner isLoading={isLoading && userInfoLoading}>
      <>
        {surveyList && (
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
                      error={errors.companyName?.message}
                      width="1052px"
                      register={register('companyName', {
                        maxLength: {
                          value: 10,
                          message: '10자 이내로 입력해주세요.',
                        },
                        required: '회사명을 입력해주세요.',
                      })}
                    />

                    <TextInput
                      register={register('role', {
                        maxLength: {
                          value: 10,
                          message: '10자 이내로 입력해주세요.',
                        },
                        required: '직무를 입력해주세요.',
                      })}
                      label="직무"
                      placeholder="직무를 입력해주세요"
                      width="1052px"
                      error={errors.role?.message}
                    />

                    <CheckBox
                      label="익명"
                      onCheck={() => setIsVisible(!isVisible)}
                      isChecked={isVisible}
                    />
                  </section>
                </S.InputContainer>
              </S.Infomation>

              <S.OpenSection>
                <h1>1. 전체공개 평판 내역입니다.</h1>
                <S.TextAreaContainer $error={errors.prosAndCons?.message}>
                  <div>
                    <h2>
                      <b>1-1. </b>지원자님의 장/단점을 작성해주세요.
                    </h2>
                    <textarea
                      {...register('prosAndCons', {
                        required: '지원자님의 장/단점을 작성해주세요.',
                      })}
                      placeholder="지원자님에 대한 솔직한 의견을 작성해주세요"
                    />
                    {errors.prosAndCons && (
                      <span>{errors.prosAndCons.message}</span>
                    )}
                  </div>
                </S.TextAreaContainer>
              </S.OpenSection>

              <S.SelectSection>
                <h1>2. 기업 채용담당자만 확인할 수 있는 내역입니다.</h1>
                <section>
                  {surveyList?.data.surveyItems.map((surveyItem) => (
                    <ReviewSelector
                      key={surveyItem.id}
                      question={surveyItem.question}
                      tendency1={surveyItem.tendency1}
                      tendency2={surveyItem.tendency2}
                      isChecked={survey[surveyItem.id]}
                      surveyId={surveyItem.id}
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
              onClick={handleSubmit(submitReview)}
            />
          </S.Wrapper>
        )}
      </>
    </LoadingSpinner>
  );
};
