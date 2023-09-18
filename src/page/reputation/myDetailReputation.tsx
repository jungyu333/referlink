import { withMenuLayout } from '@hoc/withMenuLayout';
import styled from 'styled-components';
import { ReactComponent as DateSVG } from '@styles/images/svg/date.svg';

const myDetailReputation = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <div>
          <DateSVG />
        </div>

        <h1>2023.08.24 작성 평판</h1>
      </HeaderContainer>

      <WriterInforContainer>
        <Information>
          <Badge>작성자 정보</Badge>
          <InforTable>
            <InforItem>
              <h3>이름</h3>
              <h4>작성자</h4>
            </InforItem>
          </InforTable>
        </Information>
        <Line />
        <h2>
          ※ 평판자료를 채용 외 목적으로 활용하거나 정보를 유출할 경우 형사처벌
          대상이 될 수 있습니다.
        </h2>
      </WriterInforContainer>
    </Wrapper>
  );
};

export const MyDetailReputationWithMenu = withMenuLayout(
  '평판상세',
  '평판 작성자 이름',
)(myDetailReputation);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 74px;
  margin-left: 162px;
  & h1 {
    color: ${({ theme }) => theme.colors.grey2};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
    line-height: 35.04px;
  }
`;

const WriterInforContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-left: 162px;
  margin-top: 66px;

  & h2 {
    color: ${({ theme }) => theme.colors.error};
    text-align: center;
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 31px;
`;

const Line = styled.div`
  width: 1116px;
  height: 1px;
  background: rgba(96, 95, 95, 0.35);
`;

const Badge = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary1};

  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts.subtitle1};
  letter-spacing: -0.4px;
`;

const InforTable = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 56px;
`;

const InforItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: ${({ theme }) => theme.colors.grey3};
  & h3 {
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }

  & h4 {
    font: ${({ theme }) => theme.fonts.subtitle3};
    letter-spacing: -0.36px;
  }
`;
