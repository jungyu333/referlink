import { Term } from '@components/auth';
import useAgreements from '@hooks/useAgreements';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, svgLogo } from 'referlink-ui';
import styled from 'styled-components';

export const Agree = () => {
  const location = useLocation();
  const { email } = location.state || {};

  const {
    agreements,
    toggleAgreement,
    toggleAll,
    areRequiredChecked,
    allChecked,
  } = useAgreements();

  if (!email) {
    return <Navigate to="/" replace />;
  }

  return (
    <Wrapper>
      <Main>
        <section>
          <Header>
            {svgLogo} <h1>이용약관에 동의해주세요.</h1>
          </Header>

          <Term
            allChecked={allChecked}
            toggleAgreement={toggleAgreement}
            toggleAll={toggleAll}
            agreements={agreements}
          />

          <Button
            buttonText="동의 및 계속"
            isDisabled={!areRequiredChecked()}
          />
        </section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey5};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  display: inline-flex;
  padding: 100px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 40px 0px rgba(0, 0, 0, 0.05);
  margin-top: 175px;
  margin-bottom: 223px;

  & section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }
`;
