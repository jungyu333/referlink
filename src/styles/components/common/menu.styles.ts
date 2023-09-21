import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  height: 100px;
  padding: 38px 1002px 27px 162px;
  align-items: center;
  flex-shrink: 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey0};
  background: rgba(2, 141, 233, 0.03);

  & h1 {
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;

    & b {
      color: ${({ theme }) => theme.colors.grey4};
    }
  }
`;
