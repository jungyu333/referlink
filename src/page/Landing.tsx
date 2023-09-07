import { styled } from 'styled-components';

export const Landing = () => {
  return (
    <Wrapper>
      <MainText>
        누구나 평판 관리를 할 수 있게
        <br />
        평판조회의 시작, 레퍼링크
      </MainText>

      <Button>
        <div>평판 작성하기</div>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(
    --linear,
    linear-gradient(
      180deg,
      rgba(210, 236, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    )
  );
  width: 1440px;
  height: 980px;
  position: relative;
  margin: 0 auto;
`;

const MainText = styled.div`
  color: ${({ theme }) => theme.colors.gray4};
  text-align: center;
  font: ${({ theme }) => theme.fonts.display};
  position: absolute;
  left: calc(50% - 284px);
  top: 447px;
`;

const Button = styled.div`
  background: ${({ theme }) => theme.colors.primary1};
  border-radius: 8px;
  padding: 24px 36px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 190px;
  height: 68px;
  position: absolute;
  left: calc(50% - 112.5px);
  top: 633px;

  & div {
    color: ${({ theme }) => theme.colors.white};
    text-align: left;
    font: ${({ theme }) => theme.fonts.subtitle1};
    position: relative;
  }
`;
