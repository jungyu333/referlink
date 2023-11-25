import { Term } from '@components/auth';
import useAgreements from '@hooks/useAgreements';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, svgLogo } from 'referlink-ui';
import * as S from '@styles/page/auth/agree.styles';

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
    <S.Wrapper>
      <S.Main>
        <section>
          <S.Header>
            {svgLogo} <h1>이용약관에 동의해주세요.</h1>
          </S.Header>

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
      </S.Main>
    </S.Wrapper>
  );
};
