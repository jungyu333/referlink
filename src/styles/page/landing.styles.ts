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
  display: flex;
  justify-content: center;
  & main {
    margin: 323px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
  }
`;

export const MainText = styled.div`
  color: ${({ theme }) => theme.colors.grey4};
  font: ${({ theme }) => theme.fonts.display};
  letter-spacing: -0.96px;
  text-align: center;

  & b {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;
