import * as S from '@styles/page/reput/myDetailReputation.styles';
import { useState } from 'react';
import { CheckBox, svgDate } from 'referlink-ui';

export const MyDetailReputation = () => {
  const [isOpenReput, setIsOpenReput] = useState<boolean>(false);
  const mock = [
    { id: 0, label: '이름', content: '작성자' },
    { id: 1, label: '회사명', content: '비공개' },
    { id: 2, label: '직무', content: '디자이너' },
    { id: 3, label: '이메일', content: 'example@gmail.com' },
  ];

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeadLine>
          <section>
            <h1>
              <b>평판 상세</b> (평판 작성자 이름)
            </h1>

            <div>
              {svgDate}
              <h2>2023.08.24</h2>
            </div>
          </section>
        </S.HeadLine>

        <S.Warning>
          <p>
            ※ 평판자료를 채용 외 목적으로 활용하거나 정보를 유출할 경우 형사처벌
            대상이 될 수 있습니다.
          </p>
        </S.Warning>
      </S.Header>

      <S.Information>
        <h1>작성자 정보</h1>

        <S.InforTable>
          <section>
            {mock.map((item) => (
              <S.InforItem key={item.id}>
                <h1>{item.label}</h1>
                <p>{item.content}</p>
              </S.InforItem>
            ))}
          </section>
        </S.InforTable>
      </S.Information>

      <S.Main>
        <section>
          <h1>1. 전체공개 평판 내역입니다.</h1>

          <S.Content>
            지원자님은 평소 행실이 바르고 기획적인 역량이나 디자인적인 역량이나
            개발적인 역량 모두를 갖춘 이시대의 진정한 풀스텍 IT 인재입니다.
            이러한 인재를 놓친다면 커다란 국가적 낭비이며, 이는 큰 손실을 초래할
            것 입니다. 하지만 단 한가지 단점이 있습니다. 그 단점은....(더보기)
          </S.Content>
        </section>

        <CheckBox
          label="평판 비공개"
          isChecked={isOpenReput}
          onCheck={() => setIsOpenReput(!isOpenReput)}
        />
      </S.Main>
    </S.Wrapper>
  );
};
