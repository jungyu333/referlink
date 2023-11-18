import ReactModal from 'react-modal';
import * as S from '@styles/components/common/modal/requestReputModal.styles';
import { ReactComponent as PhxSVG } from '@styles/images/svg/ph_x.svg';
import { ReactComponent as FrameSVG } from '@styles/images/svg/Frame 36767.svg';
import { useForm } from 'react-hook-form';
import { EmailInput, TextInput } from '@components/common/input';
import { IRequestReputationFormData } from '_types/reput';
import { emailRegex } from '@constant/regex';
import { Button, ButtonTypes, Fonts } from 'referlink-ui';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const RequestReputModal = ({ isOpen, onClose, onConfirm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequestReputationFormData>();

  const onValid = (formData: IRequestReputationFormData) => {
    console.log(formData);
  };
  return (
    <ReactModal
      style={{
        content: {
          display: 'inline-flex',
          padding: '20px 10px',
          flexDirection: 'column',
          alignItems: 'center',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          overflow: 'auto',
          borderRadius: '8px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Custom Modal"
    >
      <S.Header>
        <FrameSVG />
        <h1>평판 작성 요청</h1>
        <PhxSVG onClick={onClose} />
      </S.Header>
      <S.Content>
        <S.InputContainer>
          <section>
            <TextInput
              label="함께 근무한 정보"
              width="580px"
              placeholder="함께 근무한 소속 (회사/팀명)"
              register={register('company', {
                maxLength: {
                  value: 10,
                  message: '10자 이내로 입력해주세요.',
                },
                required: '함께 근무한 소속을 입력해주세요.',
              })}
              //error={errors.company?.message}
            />
            <TextInput
              isLabel={false}
              width="580px"
              label=""
              placeholder="당시 내 직책/직무"
              register={register('job', {
                maxLength: {
                  value: 10,
                  message: '10자 이내로 입력해주세요.',
                },
                required: 'temp',
              })}
              //error={errors.temp?.message}
            />
          </section>

          <section>
            <TextInput
              label="작성해주시는 분 정보"
              placeholder="작성자 이름"
              width="580px"
              register={register('writerName', {
                maxLength: {
                  value: 10,
                  message: '10자 이내로 입력해주세요.',
                },
                required: '작성자 이름을 입력해주세요.',
              })}
              //error={errors.writerName?.message}
            />
            <EmailInput
              isLabel={false}
              label=""
              placeholder="이메일"
              register={register('writerEmail', {
                pattern: {
                  value: emailRegex,
                  message: '형식에 맞지 않는 이메일입니다.',
                },
                required: '이메일을 입력해주세요.',
              })}
              width="580px"
              //   error={errors.writerEmail?.message}
            />
            <TextInput
              isLabel={false}
              label=""
              placeholder="현재 소속 (회사/팀명)"
              width="580px"
              register={register('writerCompany', {
                maxLength: {
                  value: 10,
                  message: '10자 이내로 입력해주세요.',
                },
                required: '작성자 이름을 입력해주세요.',
              })}
              //error={errors.writerCompany?.message}
            />
            <TextInput
              label=""
              isLabel={false}
              placeholder="현재 직책/직무"
              width="580px"
              register={register('writerRole', {
                maxLength: {
                  value: 10,
                  message: '10자 이내로 입력해주세요.',
                },
                required: '현재 직책을 입력해주세요.',
              })}
              //error={errors.writerRole?.message}
            />
          </section>
        </S.InputContainer>

        <Button
          onClick={handleSubmit(onValid)}
          buttonType={ButtonTypes.filled}
          buttonText="작성 요청하기"
          width="580px"
          height="68px"
          px="36px"
          fontStyle={Fonts.subtitle1}
        />
      </S.Content>
    </ReactModal>
  );
};
