import { Navigate, useLocation } from 'react-router-dom';

export const Agree = () => {
  const location = useLocation();
  const { email } = location.state || {};

  if (!email) {
    return <Navigate to="/" replace />;
  }

  return <>{email}</>;
};
