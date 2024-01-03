import { ToastBody } from '@components/common';
import { useCopyClipBoard } from '@hooks/useCopyClipBoard';
import { useCustomToast } from '@hooks/useCustomToast';
import * as S from '@styles/components/reput/writtenContent.styles';
import { Button, Fonts, ReputCard, svgNote } from 'referlink-ui';

export const WrittenContent = () => {
  const { info } = useCustomToast();

  const [_, onCopy] = useCopyClipBoard();

  const onClickInvite = () => {
    const currentUrl = window.location.href;
    onCopy(currentUrl).then((result) => {
      if (result)
        info(
          <ToastBody
            boldText="초대 URL"
            mainText="이 복사되었습니다."
            subText="붙여넣기하여 레퍼링크 평판 작성을 요청해보세요!"
          />,
        );
    });
  };
  return (
    <S.Wrapper>
      <S.Header>
        <h1>내가 작성한 평판</h1>

        <Button
          buttonText="초대하기"
          isIcon
          svgIcon={svgNote}
          width="138px"
          height="52px"
          fontStyle={Fonts.subtitle2}
          px="20px"
          py="10px"
          onClick={onClickInvite}
        />
      </S.Header>

      <S.Main>
        {[1, 2, 3].map((item) => (
          <ReputCard
            mainContent="temp"
            headContent="temp"
            date="temp"
            key={item}
            onClick={() => console.log(item)}
          />
        ))}
      </S.Main>
    </S.Wrapper>
  );
};