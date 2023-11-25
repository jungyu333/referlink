import { Term } from '@components/auth';
import { Navigate } from 'react-router-dom';
import { Button, svgLogo } from 'referlink-ui';
import * as S from '@styles/page/auth/agree.styles';
import { EmailFormData } from '_types/auth';
import { useAgreements } from '@hooks/useAgreements';
import { useDetailNavigation } from '@hooks/useDetailNavigation';
import { useGetLocationState } from '@hooks/useGetLocationState';

export const Agree = () => {
  const locationState = useGetLocationState<EmailFormData>();

  const { pathNavigation } = useDetailNavigation();
  const {
    agreements,
    toggleAgreement,
    toggleAll,
    areRequiredChecked,
    allChecked,
  } = useAgreements();

  if (!locationState?.email) {
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
            onClick={() =>
              pathNavigation<EmailFormData>('/signup', locationState)
            }
          />
        </section>
      </S.Main>
    </S.Wrapper>
  );
};
