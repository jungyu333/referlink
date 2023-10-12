import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: var(
    --linear,
    linear-gradient(
      180deg,
      rgba(210, 236, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    )
  );
  width: 100%;
  height: 100vh;
  position: relative;

  & main {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 52px;
    position: absolute;
    left: 162px;
    top: 323px;
  }
`;

export const MainText = styled.div`
  color: ${({ theme }) => theme.colors.grey4};
  font: ${({ theme }) => theme.fonts.display};
  letter-spacing: -0.96px;
`;
