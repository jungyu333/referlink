import { ReactElement, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  isLoading: boolean;
  children: ReactElement;
};

export const LoadingSpinner = ({ isLoading, children }: Props) => {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setIsVisible(false), 1000);

      return () => clearTimeout(timer);
    }
    setIsVisible(true);
  }, [isLoading]);

  return isVisible ? (
    <Wrapper $isVisible={isVisible}>
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

const Wrapper = styled.div<{ $isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 9999;
  transition: opacity 1 ease-out;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
`;
