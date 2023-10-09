import styled from 'styled-components';

export const Wrapper = styled.div<{ $isFooter: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;
  flex-shrink: 1;
  margin-top: 286px;
  margin-bottom: ${({ $isFooter }) => ($isFooter ? '217px' : '')};
  justify-content: center;
  & svg {
    width: 475px;
    height: 213.706px;
    flex-shrink: 0;
  }

  & main {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
  }

  & p {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;
