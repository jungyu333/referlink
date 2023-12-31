import { emailRegex } from '@constant/regex';
import { MyPageEditFormData } from '_types/my';
import { useForm } from 'react-hook-form';
import * as S from '@styles/page/my/myPage.styles';
import {
  Button,
  ButtonTypes,
  EmailInput,
  Fonts,
  LoadingSpinner,
  TextInput,
  svgAvartar,
  svgClose,
  svgPhoto,
} from 'referlink-ui';
import { getUserInfo } from '@api/my';
import { useCustomQuery } from '@hooks/useCustomQuery';
import { useImageUpload } from '@hooks/useImageUpload';
import Cookies from 'js-cookie';
import { useDetailNavigation } from '@hooks/useDetailNavigation';

export const MyPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyPageEditFormData>();

  const {
    imageFile,
    preview,
    imageName,
    onChangeImage,
    onRemoveImage,
    imageInputRef,
  } = useImageUpload();

  const {
    data: userInfo,
    isLoading,
    error,
  } = useCustomQuery(['userinfo'], getUserInfo, {
    refetchOnWindowFocus: false,
  });

  const { pathNavigation } = useDetailNavigation();

  const onValid = (formData: MyPageEditFormData) => {
    console.log(formData);
  };

  const onClickLogout = () => {
    console.log('logout');
    //임시 cookie remove code

    Cookies.remove('accessToken');
    pathNavigation('/');
  };

  return (
    <LoadingSpinner isLoading={isLoading}>
      <S.Wrapper>
        <h1>마이페이지</h1>
        <section>
          <main>
            <S.AvatarContainer>
              <S.AvatarContent>
                <S.Information>
                  {preview.length > 0 ? (
                    <S.Avatar src={preview} />
                  ) : (
                    <>{svgAvartar}</>
                  )}

                  <S.TextContainer>
                    <h1>강민지</h1>
                  </S.TextContainer>
                </S.Information>
                <S.UploadContainer>
                  <div onClick={onRemoveImage}>{svgClose}</div>

                  <label htmlFor="avatar">{svgPhoto}</label>
                  <input
                    type="file"
                    accept="imgae/*"
                    id="avatar"
                    onChange={onChangeImage}
                    ref={imageInputRef}
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
                  width="700px"
                  error={errors.email?.message}
                />
              </S.InputContent>

              <Button width="700px" buttonText="저장하기" />
            </S.InputContainer>
          </main>

          <S.Footer>
            <div>
              <span>계정 로그아웃</span>

              <Button
                buttonText="로그아웃"
                px="16px"
                py="10px"
                fontStyle={Fonts.body2}
                buttonType={ButtonTypes.outlined}
                width="90px"
                height="44px"
                onClick={onClickLogout}
              />
            </div>
          </S.Footer>
        </section>
      </S.Wrapper>
    </LoadingSpinner>
  );
};
