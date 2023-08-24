import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    return <Outlet />;
  }

  loginWithRedirect();

  return <div>Redirecting...</div>;
};

export default ProtectedRoutes;
