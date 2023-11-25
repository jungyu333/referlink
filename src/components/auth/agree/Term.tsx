import * as S from '@styles/components/auth/agree/term.styles';
import { signUpTerms } from '@constant/terms';
import { CheckBox, Fonts, Handler } from 'referlink-ui';

type Props = {
  agreements: { [key: number]: boolean };
  allChecked: boolean;
  toggleAll: Handler;
  toggleAgreement: Handler<(value: number) => void>;
};

export const Term = ({
  agreements,
  allChecked,
  toggleAgreement,
  toggleAll,
}: Props) => {
  return (
    <S.TermsContainer>
      <CheckBox
        label="모든 약관에 동의합니다."
        isChecked={allChecked}
        onCheck={toggleAll}
        fontStyle={Fonts.subtitle2}
      />

      <S.Line />

      <S.Terms>
        {signUpTerms.map((element) => (
          <S.TermItem key={element.id}>
            <S.TermContent
              $isOptional={element.option === 'optional' ? true : false}
            >
              <CheckBox
                isChecked={agreements[element.id]}
                onCheck={() => toggleAgreement(element.id)}
              />
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
