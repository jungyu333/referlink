import { withMenuLayout } from '@hoc/withMenuLayout';
import styled from 'styled-components';
import { ReactComponent as CheckSVG } from '@styles/images/svg/check.svg';
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

      <DisclosureContainer>
        <div>
          <Disclosure>
            <h1>1. 전체공개 평판 내역입니다.</h1>
            <p>
              지원자님은 평소 행실이 바르고 기획적인 역량이나 디자인적인
              역량이나 개발적인 역량 모두를 갖춘 이시대의 진정한 풀스텍 IT
              인재입니다. 이러한 인재를 놓친다면 커다란 국가적 낭비이며, 이는 큰
              손실을 초래할 것 입니다. 하지만 단 한가지 단점이 있습니다. 그
              단점은....(더보기)
            </p>
          </Disclosure>

          <CheckBox>
            <CheckSVG />
            평판 비공개
          </CheckBox>
        </div>
      </DisclosureContainer>
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

const DisclosureContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  margin-top: 63px;
  margin-left: 162px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const Disclosure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  & h1 {
    width: 738px;
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.subtitle1};
    letter-spacing: -0.4px;
  }

  & p {
    display: flex;
    width: 1116px;
    padding: 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.grey5};

    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
`;
