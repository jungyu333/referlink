import styled from 'styled-components';

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.body2};
  letter-spacing: -0.48px;
  line-height: 136.5%;

  & b {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export const SubText = styled.p`
  color: ${({ theme }) => theme.colors.grey2};
  font: ${({ theme }) => theme.fonts.caption};
  letter-spacing: -0.32px;
`;
