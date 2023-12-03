import * as S from '@styles/components/common/modal/requestReputModal.styles';
import { useForm } from 'react-hook-form';
import { RequestReputationFormData } from '_types/reput';
import { emailRegex } from '@constant/regex';
import {
  Button,
  ButtonTypes,
  EmailInput,
  Fonts,
  Handler,
  Modal,
  TextInput,
  svgNoteEdit,
  svgPhX,
} from 'referlink-ui';

type Props = {
  isOpen: boolean;
  onClose: Handler;
  onConfirm: Handler;
};

export const RequestReputModal = ({ isOpen, onClose, onConfirm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<RequestReputationFormData>();

  const onValid = (formData: RequestReputationFormData) => {
    console.log(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} gap="0px" px="10px" py="20px">
      <>
        <S.Header>
          {svgNoteEdit}
          <h1>평판 작성 요청</h1>
          <div onClick={onClose}>{svgPhX}</div>
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
              />
              <TextInput
                isLabel={false}
                width="580px"
                label=""
                placeholder="당시 내 직책/직무"
                register={register('role', {
                  maxLength: {
                    value: 10,
                    message: '10자 이내로 입력해주세요.',
                  },
                  required: '직책을 입력해주세요.',
                })}
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
            py="24px"
            fontStyle={Fonts.subtitle1}
            isDisabled={!isValid}
          />
        </S.Content>
      </>
    </Modal>
  );
};
