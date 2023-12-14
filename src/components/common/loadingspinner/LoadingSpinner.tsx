import { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  isLoading: boolean;
  children: ReactElement;
};

export const LoadingSpinner = ({ isLoading, children }: Props) => {
  return isLoading ? (
    <Wrapper>
      <Spinner />
    </Wrapper>
  ) : (
    children
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.colors.primary1};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: ${rotate} 1s linear infinite;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; // 화면에 고정
  top: 0;
  left: 0;
  width: 100%; // 전체 너비
  height: 100%; // 전체 높이
  background-color: rgba(255, 255, 255, 0.7); // 반투명 배경
  z-index: 9999; // 다른 요소들 위에 표시
`;
