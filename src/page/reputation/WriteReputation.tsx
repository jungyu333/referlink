import { withMenuLayout } from '@hoc/withMenuLayout';
import styled from 'styled-components';
import { ReactComponent as MyPageSVG } from '@styles/images/svg/mypage.svg';
import { EmailInput, TextInput } from '@components/common';
import { useForm } from 'react-hook-form';
import { IWriteReputationFormData } from '_types/reput';
import { emailRegex } from '@constant/regex';
import { ReactComponent as CheckSVG } from '@styles/images/svg/check.svg';
import {
  Select,
  SelectContainer,
} from '@styles/page/reput/myDetailReputation.styles';

const WriteReputation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWriteReputationFormData>();
  return (
    <Wrapper>
      <HeaderContainer>
        <MyPageSVG />
        <h1>작성자 정보를 입력해주세요</h1>
      </HeaderContainer>

      <InputContainer>
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
      </InputContainer>
      <ShortAnswerContainer>
        <h1>1. 전체공개 평판 내역입니다.</h1>
        <TextAreaContainer>
          <h2>
            <b>1-1. </b>지원자님의 장/단점을 작성해주세요.
          </h2>
          <textarea placeholder="지원자님에 대한 솔직한 의견을 작성해주세요" />
        </TextAreaContainer>
      </ShortAnswerContainer>
      <NondisclosureContainer>
        <h1>2. 기업 채용담당자만 확인할 수 있는 내역입니다.</h1>
        <section>
          <QuestionContainer>
            <h2>
              <b>2-1. </b>지원자님의 일하는 성향은?
            </h2>

            <SelectContainer>
              <Select $isPrimary={true}>📝 과정이 중요</Select>
              <Select>매우 그러함</Select>
              <Select>다소 그러함</Select>
              <Select>매우 그러함</Select>
              <Select $isPrimary={true}>🥇 결과가 중요</Select>
            </SelectContainer>
          </QuestionContainer>
          <QuestionContainer>
            <h2>
              <b>2-1. </b>지원자님의 일하는 성향은?
            </h2>
            <SelectContainer>
              <Select $isPrimary={true}>📝 과정이 중요</Select>
              <Select>매우 그러함</Select>
              <Select>다소 그러함</Select>
              <Select>매우 그러함</Select>
              <Select $isPrimary={true}>🥇 결과가 중요</Select>
            </SelectContainer>
          </QuestionContainer>
          <QuestionContainer>
            <h2>
              <b>2-1. </b>지원자님의 일하는 성향은?
            </h2>
            <SelectContainer>
              <Select $isPrimary={true}>📝 과정이 중요</Select>
              <Select>매우 그러함</Select>
              <Select>다소 그러함</Select>
              <Select>매우 그러함</Select>
              <Select $isPrimary={true}>🥇 결과가 중요</Select>
            </SelectContainer>
          </QuestionContainer>
        </section>
      </NondisclosureContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 162px;
  padding-top: 74px;
  padding-bottom: 148px;
`;

const HeaderContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey2};
    font: ${({ theme }) => theme.fonts.headline2};
    line-height: 146%;
    letter-spacing: -0.48px;
  }
`;

const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-top: 40px;

  & > div:last-child {
    display: flex;
    width: 1115px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    & div {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.colors.grey3};
      font: ${({ theme }) => theme.fonts.subtitle2};

      letter-spacing: -0.36px;
    }
  }
`;

const ShortAnswerContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 33px;
  margin-top: 69px;

  & h1 {
    width: 738px;
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle1};
    letter-spacing: -0.4px;
  }
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  & h2 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle2};
    letter-spacing: -0.36px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }

  & textarea {
    display: flex;
    width: 1116px;
    height: 170px;
    padding: 32px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    border-radius: 16px;
    resize: none;
    border: 1px solid ${({ theme }) => theme.colors.grey1};
    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.primary1};
      border: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey1};
      font: ${({ theme }) => theme.fonts.body};
      letter-spacing: -0.32px;
    }
  }
`;

const NondisclosureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 33px;
  margin-top: 56px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle1};
    width: 738px;
    letter-spacing: -0.4px;
  }

  & section {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

const QuestionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  & h2 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle2};

    letter-spacing: -0.36px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

export const WriteReputationWithMenu =
  withMenuLayout('평판 작성')(WriteReputation);
