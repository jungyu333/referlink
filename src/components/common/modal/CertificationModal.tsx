import { emailRegex } from '@constant/regex';
import { CertificationFormData } from '_types/reput';
import { useForm } from 'react-hook-form';
import {
  Button,
  ButtonTypes,
  EmailInput,
  Fonts,
  Handler,
  Modal,
  TextInput,
} from 'referlink-ui';
import * as S from '@styles/components/common/modal/certificationModal.styles';

type Props = {
  isOpen: boolean;
  onClose: Handler;
  onConfirm: Handler;
  confirmLabel: string;
  cancelLabel: string;
};

export const CertificationModal = ({
  isOpen,
  onClose,
  onConfirm,
  confirmLabel,
  cancelLabel,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CertificationFormData>();

  return (
    <Modal px="60px" py="60px" onClose={onClose} isOpen={isOpen}>
      <S.Wrapper>
        <S.Main>
          <S.Header>
            <h1>
              서류, 면접만으로는 부족한 지원자 정보 <br />
              레퍼링크하세요!
            </h1>

            <p>
              *기업관리자 인증 이후 사용가능합니다. <br /> *현재 재직중인
              대표자/ 임원진/ 인사팀만 가능합니다. <br /> *증빙에 사용된 서류는
              기업관리자 인증 용도로만 사용됩니다.
              <br /> *기업관리자 사칭은 형사처벌 대상이며, 서비스 이용이 영구
              제한됩니다.
            </p>
          </S.Header>

          <S.Line />

          <S.InputContainer>
            <TextInput
              width="663px"
              register={register('company', {
                maxLength: {
                  value: 20,
                  message: '20자 이내로 입력해주세요.',
                },
                required: '회사명을 입력해주세요.',
              })}
              label=""
              isLabel={false}
              placeholder="회사명을 입력하세요."
            />

            <EmailInput
              label=""
              isLabel={false}
              register={register('email', {
                pattern: {
                  value: emailRegex,
                  message: '형식에 맞지 않는 이메일입니다.',
                },
                required: '이메일을 입력해주세요.',
              })}
              placeholder="회사에서 사용중인 업무용 메일을 입력하세요."
              width="663px"
            />
            <S.ImageContainer>
              <TextInput
                width="514px"
                register={register('registration', {
                  required: '사업자등록증을 첨부해주세요.',
                })}
                isLabel={false}
                label=""
                placeholder="사업자등록증을 첨부하세요"
              />

              <Button
                buttonText="첨부하기"
                px="16px"
                py="10px"
                width="140px"
                fontStyle={Fonts.body2}
              />
            </S.ImageContainer>

            <S.ImageContainer>
              <TextInput
                width="514px"
                register={register('businessCard', {
                  required: '명함을 첨부해주세요.',
                })}
                isLabel={false}
                label=""
                placeholder="명함을 첨부하세요"
              />

              <Button
                buttonText="첨부하기"
                px="16px"
                py="10px"
                width="140px"
                fontStyle={Fonts.body2}
              />
            </S.ImageContainer>
          </S.InputContainer>
        </S.Main>

        <S.ButtonContainer>
          <Button
            width="203px"
            buttonText={cancelLabel}
            buttonType={ButtonTypes.outlined}
            fontStyle={Fonts.subtitle1}
            px="36px"
            py="24px"
          />

          <Button
            width="203px"
            buttonText={confirmLabel}
            buttonType={ButtonTypes.filled}
            fontStyle={Fonts.subtitle1}
            px="36px"
            py="24px"
          />
        </S.ButtonContainer>
      </S.Wrapper>
    </Modal>
  );
};
