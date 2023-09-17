import { emailRegex, phoneRegex } from '@constant/regex';
import { withMenuLayout } from '@hoc/withMenuLayout';
import { IMyPageEditFormData } from '_types/my';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ReactComponent as AddPhotoSVG } from '@styles/images/svg/addPhoto.svg';
import { ReactComponent as CloseButtonSVG } from '@styles/images/svg/closeButton.svg';

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
    // <>
    //   <h1>마이 페이지</h1>

    //   <section>
    //     <div />

    //     <div>
    //       <div>등록</div>
    //       <div>제거</div>
    //     </div>
    //   </section>

    //   <main>
    //     <form onSubmit={handleSubmit(onValid)}>
    //       <div>
    //         <div>
    //           <label>한줄 자기소개</label>
    //           <input
    //             type="text"
    //             placeholder="한줄 자기소개를 입력해보세요"
    //             {...register('comment', {
    //               maxLength: {
    //                 value: 50,
    //                 message: '50자 이내로 입력해주세요.',
    //               },
    //               required: '한줄 자기소개를 입력해주세요.',
    //             })}
    //           />
    //           {errors.comment && <span>{errors.comment.message}</span>}
    //         </div>

    //         <div>
    //           <label>이름</label>
    //           <input
    //             type="text"
    //             placeholder="이름을 입력해주세요"
    //             {...register('name', {
    //               maxLength: {
    //                 value: 10,
    //                 message: '10자 이내로 입력해주세요.',
    //               },
    //               required: '이름을 입력해주세요.',
    //             })}
    //           />
    //           {errors.name && <span>{errors.name.message}</span>}
    //         </div>

    //         <div>
    //           <label>직무</label>
    //           <input
    //             type="text"
    //             placeholder="직무를 입력해주세요"
    //             {...register('job', {
    //               maxLength: {
    //                 value: 10,
    //                 message: '10자 이내로 입력해주세요.',
    //               },
    //               required: '직무를 입력해주세요.',
    //             })}
    //           />

    //           {errors.job && <span>{errors.job.message}</span>}
    //         </div>

    //         <div>
    //           <label>휴대폰 번호</label>
    //           <input
    //             type="number"
    //             placeholder="휴대폰 번호를 입력해주세요"
    //             {...register('phone', {
    //               pattern: {
    //                 value: phoneRegex,
    //                 message: '형식에 맞지 않는 번호입니다.',
    //               },
    //               required: '휴대폰 번호를 입력해주세요.',
    //             })}
    //           />

    //           {errors.phone && <span>{errors.phone.message}</span>}
    //         </div>

    //         <div>
    //           <label>이메일 주소</label>
    //           <input
    //             autoComplete="off"
    //             type="email"
    //             placeholder="이메일을 입력해주세요"
    //             {...register('email', {
    //               pattern: {
    //                 value: emailRegex,
    //                 message: '형식에 맞지 않는 이메일입니다.',
    //               },
    //               required: '이메일을 입력해주세요.',
    //             })}
    //           />

    //           {errors.email && <span>{errors.email.message}</span>}
    //         </div>
    //       </div>

    //       <button>저장하기</button>
    //     </form>
    //   </main>
    // </>

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

      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-top: 100px;
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

export const MyPageWithMenu = withMenuLayout('마이페이지')(MyPage);
