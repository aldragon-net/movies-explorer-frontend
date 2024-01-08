import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
    isAuthorized,
    redirectPath = '/',
    children,
  }) => {
    if (!isAuthorized) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

  export default ProtectedRoute;
