import { withMenuLayout } from '@hoc/withMenuLayout';
import styled from 'styled-components';
import { ReactComponent as MyPageSVG } from '@styles/images/svg/mypage.svg';
import { EmailInput, TextInput } from '@components/common';
import { useForm } from 'react-hook-form';
import { IWriteReputationFormData } from '_types/reput';
import { emailRegex } from '@constant/regex';
import { ReactComponent as CheckSVG } from '@styles/images/svg/check.svg';

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

export const WriteReputationWithMenu =
  withMenuLayout('평판 작성')(WriteReputation);
