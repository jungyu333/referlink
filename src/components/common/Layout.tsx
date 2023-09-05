import { Header, Footer } from '@components/common';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Outlet />
      </Content>

      <Footer />
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
  overflow: auto;
`;
