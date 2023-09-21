import { withMenuLayout } from '@hoc/withMenuLayout';
import { ReactComponent as CheckSVG } from '@styles/images/svg/check.svg';
import { ReactComponent as DateSVG } from '@styles/images/svg/date.svg';
import * as S from '@styles/page/reput/myDetailReputation.styles';
const myDetailReputation = () => {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <div>
          <DateSVG />
        </div>

        <h1>2023.08.24 작성 평판</h1>
      </S.HeaderContainer>

      <S.WriterInforContainer>
        <S.Information>
          <S.Badge>작성자 정보</S.Badge>
          <S.InforTable>
            <S.InforItem>
              <h3>이름</h3>
              <h4>작성자</h4>
            </S.InforItem>
          </S.InforTable>
        </S.Information>
        <S.Line />
        <h2>
          ※ 평판자료를 채용 외 목적으로 활용하거나 정보를 유출할 경우 형사처벌
          대상이 될 수 있습니다.
        </h2>
      </S.WriterInforContainer>

      <S.DisclosureContainer>
        <div>
          <S.Disclosure>
            <h1>1. 전체공개 평판 내역입니다.</h1>
            <p>
              지원자님은 평소 행실이 바르고 기획적인 역량이나 디자인적인
              역량이나 개발적인 역량 모두를 갖춘 이시대의 진정한 풀스텍 IT
              인재입니다. 이러한 인재를 놓친다면 커다란 국가적 낭비이며, 이는 큰
              손실을 초래할 것 입니다. 하지만 단 한가지 단점이 있습니다. 그
              단점은....(더보기)
            </p>
          </S.Disclosure>

          <S.CheckBox>
            <CheckSVG />
            평판 비공개
          </S.CheckBox>
        </div>
      </S.DisclosureContainer>

      <S.NondisclosureContainer>
        <h1>2. 기업 담당자만 확인할 수 있는 내용입니다.</h1>

        <S.QuestionContainer>
          <h2>
            <b>2-1. </b>지원자님의 일하는 성향은?
          </h2>

          <S.SelectContainer>
            <S.Select $isPrimary={true}>📝 과정이 중요</S.Select>
            <S.Select>매우 그러함</S.Select>
            <S.Select>다소 그러함</S.Select>
            <S.Select>매우 그러함</S.Select>
            <S.Select $isPrimary={true}>🥇 결과가 중요</S.Select>
          </S.SelectContainer>
        </S.QuestionContainer>
      </S.NondisclosureContainer>
    </S.Wrapper>
  );
};

export const MyDetailReputationWithMenu = withMenuLayout(
  '평판상세',
  '평판 작성자 이름',
)(myDetailReputation);
