import { emailRegex, phoneRegex } from '@constant/regex';
import { IMyPageEditFormData } from '_types/my';
import { useForm } from 'react-hook-form';
import { ReactComponent as AddPhotoSVG } from '@styles/images/svg/addPhoto.svg';
import { ReactComponent as CloseButtonSVG } from '@styles/images/svg/closeButton.svg';
import { EmailInput, TextInput } from '@components/common';
import * as S from '@styles/page/my/myPage.styles';
import { useRef, useState } from 'react';
import { Button } from 'referlink-ui';

export const MyPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMyPageEditFormData>();
  const [avatarFile, setAvaterFile] = useState<File | null>(null);
  const [previewAvatar, setPreviewAvatar] = useState('');
  const avatarRef = useRef<HTMLInputElement>(null);

  const onValid = (formData: IMyPageEditFormData) => {
    console.log(formData);
  };

  const onChangeAvater = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target.files) {
      const file = event.target.files[0];

      if (file) {
        setAvaterFile(file);
        setPreviewAvatar(URL.createObjectURL(file));
      }
    }
  };

  const handleRemoveImage = () => {
    setAvaterFile(null);
    setPreviewAvatar('');

    if (avatarRef.current) {
      avatarRef.current.value = '';
    }
  };

  return (
    <S.Wrapper>
      <h1>마이페이지</h1>
      <main>
        <S.AvatarContainer>
          <S.AvatarContent>
            <S.Information>
              {previewAvatar.length > 0 ? (
                <S.Avatar src={previewAvatar} />
              ) : (
                <S.NoAvatar />
              )}

              <S.TextContainer>
                <h1>강민지</h1>
                <h2>한 줄 자기소개입니다.</h2>
              </S.TextContainer>
            </S.Information>
            <S.UploadContainer>
              <CloseButtonSVG onClick={handleRemoveImage} />

              <label htmlFor="avatar">
                <AddPhotoSVG />
              </label>
              <input
                type="file"
                accept="imgae/*"
                id="avatar"
                onChange={onChangeAvater}
                ref={avatarRef}
              />
            </S.UploadContainer>
          </S.AvatarContent>
          <section />
        </S.AvatarContainer>

        <S.InputContainer onSubmit={handleSubmit(onValid)}>
          <S.InputContent>
            <TextInput
              register={register('comment', {
                maxLength: {
                  value: 50,
                  message: '50자 이내로 입력해주세요.',
                },
                required: '한 줄 자기소개를 입력해주세요.',
              })}
              label="한 줄 자기소개"
              placeholder="한 줄 자기소개를 입력해보세요"
              width="700px"
              error={errors.comment?.message}
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
                error={errors.name?.message}
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
                width="330px"
                error={errors.job?.message}
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
                error={errors.phone?.message}
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
                error={errors.email?.message}
              />
            </section>
          </S.InputContent>

          <Button width="700px" buttonText="저장하기" />
        </S.InputContainer>
      </main>
    </S.Wrapper>
  );
};
