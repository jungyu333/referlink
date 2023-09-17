import { emailRegex, phoneRegex } from '@constant/regex';
import { withMenuLayout } from '@hoc/withMenuLayout';
import { IMyPageEditFormData } from '_types/my';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ReactComponent as AddPhotoSVG } from '@styles/images/svg/addPhoto.svg';
import { ReactComponent as CloseButtonSVG } from '@styles/images/svg/closeButton.svg';
import { Button } from '@components/common/button';
import { EmailInput, TextInput } from '@components/common';

const MyPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMyPageEditFormData>();

  const onValid = (formData: IMyPageEditFormData) => {
    console.log(formData);
  };

  return (
    <Wrapper>
      <AvatarContainer>
        <AvatarContent>
          <Information>
            <Avatar />

            <TextContainer>
              <h1>강민지</h1>
              <h2>한 줄 자기소개입니다.</h2>
            </TextContainer>
          </Information>
          <UploadContainer>
            <CloseButtonSVG />
            <AddPhotoSVG />
          </UploadContainer>
        </AvatarContent>
        <section />
      </AvatarContainer>

      <InputContainer>
        <InputContent>
          <TextInput
            register={register('comment', {
              maxLength: {
                value: 50,
                message: '50자 이내로 입력해주세요.',
              },
              required: '한줄 자기소개를 입력해주세요.',
            })}
            label="한 줄 자기소개"
            placeholder="한 줄 자기소개를 입력해보세요"
            width="700px"
          />
          <section>
            <TextInput
              register={register('name', {
                maxLength: {
                  value: 10,
                  message: '10자 이내로 입력해주세요.',
                },
                required: '이름을 입력해주세요.',
              })}
              label="이름"
              placeholder="이름을 입력해주세요"
              width="330px"
            />

            <TextInput
              register={register('job', {
                maxLength: {
                  value: 10,
                  message: '10자 이내로 입력해주세요.',
                },
                required: '이름을 입력해주세요.',
              })}
              label="직무"
              placeholder="직무를 입력해주세요"
              width="330px"
            />
          </section>
          <section>
            <TextInput
              register={register('phone', {
                pattern: {
                  value: phoneRegex,
                  message: '형식에 맞지 않는 번호입니다.',
                },
                required: '휴대폰 번호를 입력해주세요.',
              })}
              label="휴대폰 번호"
              placeholder="휴대폰 번호를 입력해주세요"
              width="330px"
            />
            <EmailInput
              register={register('email', {
                pattern: {
                  value: emailRegex,
                  message: '형식에 맞지 않는 이메일입니다.',
                },
                required: '이메일을 입력해주세요.',
              })}
              label="이메일 주소"
              placeholder="이메일을 입력해주세요."
              width="330px"
            />
          </section>
        </InputContent>

        <Button width="700px" buttonText="저장하기" />
      </InputContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-top: 100px;
  margin-bottom: 164px;
  width: 700px;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  & section {
    width: 700px;
    height: 1px;
    background: rgba(96, 95, 95, 0.35);
  }
`;

const AvatarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 327px;
`;

const Information = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
`;

const UploadContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;

  & svg {
    cursor: pointer;
  }
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  & h1 {
    color: ${({ theme }) => theme.colors.gray4};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
  }

  & h2 {
    color: ${({ theme }) => theme.colors.gray3};
    font: ${({ theme }) => theme.fonts.subtitle2};
    letter-spacing: -0.36px;
  }
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 56px;
`;

const InputContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  & section {
    display: flex;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const MyPageWithMenu = withMenuLayout('마이페이지')(MyPage);
