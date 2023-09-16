import * as S from '@styles/page/auth/signUp.styles';
import { ReactComponent as UnCheckSVG } from '@styles/images/svg/uncheck.svg';
import { signUpTerms } from '@constant/terms';

export const Term = () => {
  return (
    <S.TermsContainer>
      <S.AllTerms>
        <UnCheckSVG />
        모든 약관에 동의합니다.
      </S.AllTerms>

      <S.Line />

      <S.Terms>
        {signUpTerms.map((element) => (
          <S.TermItem>
            <S.TermContent>
              <UnCheckSVG />
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
