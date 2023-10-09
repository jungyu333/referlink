import ReactModal from 'react-modal';
import styled from 'styled-components';
import { ReactComponent as PhxSVG } from '@styles/images/svg/ph_x.svg';
import { ReactComponent as FrameSVG } from '@styles/images/svg/Frame 36767.svg';
import { Button } from '@components/common/button';
import { useForm } from 'react-hook-form';
import { EmailInput, TextInput } from '@components/common/input';
import { IRequestReputationFormData } from '_types/reput';
import { emailRegex } from '@constant/regex';

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
      <Header>
        <FrameSVG />
        <h1>평판 작성 요청</h1>
        <PhxSVG />
      </Header>
      <Content>
        <InputContainer>
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
              label="함께 근무한 정보"
              placeholder="placeholder"
              register={register('temp', {
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
        </InputContainer>

        <Button
          onClick={handleSubmit(onValid)}
          isPrimary
          buttonText="작성 요청하기"
          width="580px"
          height="68px"
          px="36px"
        />
      </Content>
    </ReactModal>
  );
};

const Header = styled.div`
  display: flex;
  width: 628px;
  padding: 50px 24px;
  justify-content: center;
  align-items: flex-end;
  align-content: flex-end;
  gap: 12px 467px;
  flex-wrap: wrap;
  position: relative;

  & h1 {
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
  }

  & svg:first-child {
    width: 72px;
    height: 72px;
    flex-shrink: 0;
    fill: ${({ theme }) => theme.colors.white};
  }

  & svg:last-child {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 14px;
    top: 4px;
  }
`;

const Content = styled.form`
  display: flex;
  padding: 10px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  & section:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  & section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;