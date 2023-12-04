import { withMenuLayout } from '@hoc/withMenuLayout';
import { ReactComponent as MyPageSVG } from '@styles/images/svg/mypage.svg';
import { ReputQuestion } from '@components/common';
import { useForm } from 'react-hook-form';
import { IWriteReputationFormData } from '_types/reput';
import { emailRegex } from '@constant/regex';
import { ReactComponent as CheckSVG } from '@styles/images/svg/check.svg';
import * as S from '@styles/page/review/writeReview.styles';
import { EmailInput, TextInput } from 'referlink-ui';

const WriteRiview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWriteReputationFormData>();
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <MyPageSVG />
        <h1>작성자 정보를 입력해주세요</h1>
      </S.HeaderContainer>

      <S.InputContainer>
        <TextInput
          label="이름"
          placeholder="이름을 작성해주세요."
          error={errors.name?.message}
          width="1115px"
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
          width="1115px"
          error={errors.email?.message}
        />

        <TextInput
          label="회사명"
          placeholder="회사명을 입력해주세요."
          error={errors.company?.message}
          width="1115px"
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
          width="1115px"
          error={errors.job?.message}
        />

        <div>
          <TextInput
            register={register('career', {
              maxLength: {
                value: 10,
                message: '10자 이내로 입력해주세요.',
              },
              required: '경력을 입력해주세요.',
            })}
            label="직무"
            placeholder="ex) n년차"
            width="1115px"
            error={errors.career?.message}
          />

          <div>
            <CheckSVG />
            익명
          </div>
        </div>
      </S.InputContainer>
      <S.ShortAnswerContainer>
        <h1>1. 전체공개 평판 내역입니다.</h1>
        <S.TextAreaContainer>
          <h2>
            <b>1-1. </b>지원자님의 장/단점을 작성해주세요.
          </h2>
          <textarea placeholder="지원자님에 대한 솔직한 의견을 작성해주세요" />
        </S.TextAreaContainer>
      </S.ShortAnswerContainer>
      <S.NondisclosureContainer>
        <h1>2. 기업 채용담당자만 확인할 수 있는 내역입니다.</h1>
        <section>
          <ReputQuestion />
          <ReputQuestion />
          <ReputQuestion />
        </section>
      </S.NondisclosureContainer>
    </S.Wrapper>
  );
};

export const WriteReputationWithMenu = withMenuLayout('평판 작성')(WriteRiview);
