import { styled } from 'styled-components';
import { ReactComponent as EyeSVG } from '@styles/images/svg/eye.svg';
import { ReactComponent as UnCheckSVG } from '@styles/images/svg/uncheck.svg';

export const SignUp = () => {
  return (
    <Wrapper>
      <SignUpContainer>
        <h1>회원가입</h1>
        <SignUpForm>
          <InputContainer>
            <Inner>
              <Input>
                <InnerContainer>
                  <label>이메일</label>
                  <input type="email" placeholder="이메일을 입력해주세요." />
                </InnerContainer>

                {/* <Validation>support text</Validation> */}
              </Input>

              <Input>
                <InnerContainer>
                  <label>비밀번호</label>
                  <input type="password" placeholder="8글자 작성" />

                  <EyeSVG />
                </InnerContainer>

                {/* <Validation>support text</Validation> */}
              </Input>

              <Input>
                <InnerContainer>
                  {/* <label>비밀번호</label> */}
                  <input type="password" placeholder="비밀번호 재확인." />

                  {/* <EyeSVG /> */}
                </InnerContainer>

                {/* <Validation>support text</Validation> */}
              </Input>
            </Inner>

            <TermsContainer>
              <AllTerms>
                <UnCheckSVG />
                모든 약관에 동의합니다.
              </AllTerms>
              <Line />
              <Terms>
                <TermItem>
                  <TermContent>
                    <UnCheckSVG />
                    <h2>
                      <b>(필수) </b>
                      서비스 이용약관
                    </h2>
                  </TermContent>
                  <View>보기</View>
                </TermItem>

                <TermItem>
                  <TermContent>
                    <UnCheckSVG />
                    <h2>
                      <b>(필수) </b>
                      개인정보 수집 및 이용
                    </h2>
                  </TermContent>
                  <View>보기</View>
                </TermItem>

                <TermItem>
                  <TermContent>
                    <UnCheckSVG />
                    <h2>
                      <b>(필수) </b>제 3자 정보제공 동의
                    </h2>
                  </TermContent>
                  <View>보기</View>
                </TermItem>

                <TermItem>
                  <TermContent>
                    <UnCheckSVG />
                    <h2>
                      <b>(선택) </b>
                      광고성 정보 수신
                    </h2>
                  </TermContent>
                  <View>보기</View>
                </TermItem>
              </Terms>
            </TermsContainer>
          </InputContainer>

          <PrimaryButton>가입하기</PrimaryButton>
        </SignUpForm>
      </SignUpContainer>

      <BottomText>
        이미 계정이 있으신가요?
        <b>로그인</b>
      </BottomText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 130px;
  margin-bottom: 91px;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  & h1 {
    color: ${({ theme }) => theme.colors.black};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Input = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  position: relative;
  & label {
    display: flex;
    align-items: center;
    align-self: stretch;

    color: ${({ theme }) => theme.colors.gray4};
    font: ${({ theme }) => theme.fonts.subtitle2};
  }

  & input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    height: 58px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray1};

    display: flex;
    padding: 10px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray1};
      font: ${({ theme }) => theme.fonts.body};
    }
  }

  & svg {
    position: absolute;
    left: 350px;
    top: 53px;
  }
`;

const Validation = styled.span`
  display: flex;
  align-items: center;
  align-self: stretch;

  color: ${({ theme }) => theme.colors.error};
  font: ${({ theme }) => theme.fonts.caption};
  letter-spacing: -0.26px;
`;

const TermsContainer = styled.div`
  width: 400px;
  height: 248px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  position: relative;
`;

const AllTerms = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 20px;
  left: 16px;
  color: ${({ theme }) => theme.colors.gray3};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
`;

const Line = styled.div`
  width: 399px;
  height: 1px;
  background: rgba(96, 95, 95, 0.35);
  position: absolute;
  top: 64px;
`;

const Terms = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: absolute;
  top: 84px;
  left: 16px;
`;

const TermItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 368px;
`;

const TermContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & h2 {
    color: ${({ theme }) => theme.colors.gray3};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

const View = styled.div`
  color: ${({ theme }) => theme.colors.gray1};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
`;

const BottomText = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  color: ${({ theme }) => theme.colors.gray3};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;

  & b {
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.body};
    font-weight: 700;
    letter-spacing: -0.32px;
    cursor: pointer;
  }
`;

const PrimaryButton = styled.button`
  display: flex;
  width: 400px;
  height: 58px;
  padding: 24px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
  border: none;
  cursor: pointer;
`;
