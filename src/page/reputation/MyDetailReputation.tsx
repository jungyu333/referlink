import { ReputQuestion } from '@components/common';
import { ReactComponent as CheckSVG } from '@styles/images/svg/check.svg';
import { ReactComponent as DateSVG } from '@styles/images/svg/date.svg';

import * as S from '@styles/page/reput/myDetailReputation.styles';
import { Button, ButtonTypes, svgNote, svgShare } from 'referlink-ui';
export const MyDetailReputation = () => {
  return (
    <S.Wrapper>
      <header>
        <S.HeaderContainer>
          <section>
            <S.Header>
              <h1>
                <b>평판 상세 </b>
                (평판 작성자 이름)
              </h1>

              <S.Date>
                <DateSVG />
                2023.08.24
              </S.Date>
            </S.Header>
            <S.ButtonContainer>
              <Button
                svgIcon={svgNote}
                width="177px"
                height="52px"
                px="20px"
                py="10px"
                buttonText="평판 작성 요청"
              />
              <Button
                buttonText="평판 공유하기"
                width="177px"
                height="52px"
                px="20px"
                py="10px"
                buttonType={ButtonTypes.outlined}
                svgIcon={svgShare}
              />
            </S.ButtonContainer>
          </section>

          <p>
            ※ 평판자료를 채용 외 목적으로 활용하거나 정보를 유출할 경우 형사처벌
            대상이 될 수 있습니다.
          </p>
        </S.HeaderContainer>

        <S.WriterInforContainer>
          <h1>작성자 정보</h1>
          <S.Information>
            <S.InforTable>
              <S.InforItem>
                <h3>이름</h3>
                <h4>작성자</h4>
              </S.InforItem>
            </S.InforTable>
          </S.Information>
        </S.WriterInforContainer>
      </header>

      <main>
        <S.DisclosureContainer>
          <div>
            <S.Disclosure>
              <h1>1. 전체공개 평판 내역입니다.</h1>
              <p>
                지원자님은 평소 행실이 바르고 기획적인 역량이나 디자인적인
                역량이나 개발적인 역량 모두를 갖춘 이시대의 진정한 풀스텍 IT
                인재입니다. 이러한 인재를 놓친다면 커다란 국가적 낭비이며, 이는
                큰 손실을 초래할 것 입니다. 하지만 단 한가지 단점이 있습니다. 그
                단점은....(더보기)
              </p>
            </S.Disclosure>

            <S.CheckBox>
              <CheckSVG />
              평판 비공개
            </S.CheckBox>
          </div>
        </S.DisclosureContainer>

        <S.NonDisclosureContainer>
          <h1>2. 기업 담당자만 확인할 수 있는 내용입니다.</h1>

          <ReputQuestion />
        </S.NonDisclosureContainer>
      </main>
    </S.Wrapper>
  );
};
