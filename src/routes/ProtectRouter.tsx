import { LayoutProps } from '@components/common';
import useGetToken from '@hooks/useGetToken';
import { Navigate } from 'react-router-dom';

type Props = {
  component: React.ComponentType<any>;
  layout: React.ComponentType<LayoutProps>;
  requiresAuth?: boolean;
  isHeaderMenu?: boolean;
  isAuth?: boolean;
};

export const ProtectRouter = ({
  component: Component,
  layout: Layout,
  requiresAuth = false,
  isAuth = false,
  isHeaderMenu = true,
}: Props) => {
  const token = useGetToken();

  if (requiresAuth && !token) {
    return <Navigate to="/signin" replace />;
  }

  if (isAuth && token) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <Layout isHeaderMenu={isHeaderMenu}>
      <Component />
    </Layout>
  );
};
