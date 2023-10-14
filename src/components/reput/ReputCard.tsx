import styled from 'styled-components';
import { ReactComponent as CheckSVG } from '@styles/images/svg/check.svg';
import { ReactComponent as DateSVG } from '@styles/images/svg/date.svg';

export const ReputCard = () => {
  return (
    <Wrapper>
      <Main>
        <div>
          <h1>준영/회사글자가늘어나면 글씨째로늘어나요/직무</h1>
          <div>
            <CheckSVG />
            <h2>평판 비공개</h2>
          </div>
        </div>

        <p>
          지원자님은 평소 행실이 바르고 기획적인 역량이나 디자인적인 역량이나
          개발적인 역량 모두를 갖춘 이시대의 진정한 풀스텍 IT 인재입니다.
        </p>
      </Main>

      <section />

      <DateContainer>
        <DateSVG />

        <h1>2023.08.24</h1>
      </DateContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  padding: 40px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.09);
  }

  & section {
    width: 308px;
    height: 1px;
    background: rgba(96, 95, 95, 0.1);
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  & > div {
    display: flex;
    width: 308px;
    justify-content: space-between;
    align-items: flex-start;

    & h1 {
      max-width: 180px;
      word-wrap: break-word;
      flex-shrink: 0;
      color: ${({ theme }) => theme.colors.primary1};
      font: ${({ theme }) => theme.fonts.body2};
      line-height: 136.5%;
      letter-spacing: -0.32px;
    }

    & div {
      display: flex;
      align-items: center;
      gap: 4px;

      & h2 {
        color: ${({ theme }) => theme.colors.grey3};
        font: ${({ theme }) => theme.fonts.caption};
        letter-spacing: -0.26px;
      }
    }
  }

  & p {
    width: 308px;
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;

const DateContainer = styled.div`
  display: flex;
  width: 308px;
  align-items: flex-start;
  gap: 4px;

  & svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  & h1 {
    width: 280px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.grey2};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;
