import * as S from '@styles/page/auth/signUp.styles';
import { ReactComponent as CheckSVG } from '@styles/images/svg/check.svg';
import { ReactComponent as UnCheckSVG } from '@styles/images/svg/uncheck.svg';
import { signUpTerms } from '@constant/terms';
import useAgreements from '@hooks/useAgreements';

export const Term = () => {
  const {
    agreements,
    toggleAgreement,
    toggleAll,
    areRequiredChecked,
    allChecked,
  } = useAgreements();
  return (
    <S.TermsContainer>
      <S.AllTerms>
        <div onClick={() => toggleAll()}>
          {allChecked ? <CheckSVG /> : <UnCheckSVG />}
        </div>
        모든 약관에 동의합니다.
      </S.AllTerms>

      <S.Line />

      <S.Terms>
        {signUpTerms.map((element) => (
          <S.TermItem>
            <S.TermContent
              $isOptional={element.option === 'optional' ? true : false}
            >
              <div onClick={() => toggleAgreement(element.id)}>
                {agreements[element.id] ? <CheckSVG /> : <UnCheckSVG />}
              </div>
              <h2>
                <b>{element.option === 'required' ? '(필수)' : '(선택)'} </b>
                {element.text}
              </h2>
            </S.TermContent>
            <S.View>보기</S.View>
          </S.TermItem>
        ))}
      </S.Terms>
    </S.TermsContainer>
  );
};
