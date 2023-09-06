import { Header, Footer } from '@components/common';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

type Props = {
  isFooter?: boolean;
};

export const Layout = ({ isFooter = true }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Outlet />
      </Content>

      {isFooter && <Footer />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;
