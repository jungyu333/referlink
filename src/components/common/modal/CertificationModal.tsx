import { Handler, Modal } from 'referlink-ui';
import styled from 'styled-components';

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
  return (
    <Modal px="60px" py="60px" onClose={onClose} isOpen={isOpen}>
      <Wrapper>
        <Main>
          <Header>
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
          </Header>

          <Line />

          <div></div>
        </Main>

        <section></section>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 38px;

  & h1 {
    width: 538px;
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }

  & p {
    width: 538px;
    color: ${({ theme }) => theme.colors.grey2};
    font: ${({ theme }) => theme.fonts.subtitle2};
    letter-spacing: -0.36px;
  }
`;

const Line = styled.section`
  width: 663px;
  height: 1px;
  background: rgba(96, 95, 95, 0.35);
`;
