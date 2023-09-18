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
    color: ${({ theme }) => theme.colors.gray2};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
    line-height: 35.04px;
  }
`;
