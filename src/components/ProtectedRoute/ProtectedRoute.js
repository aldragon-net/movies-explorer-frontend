import './ProtectedRoute.css';
import { Navigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader.js';

function ProtectedRoute ({isReady, isAuthorized, redirectPath = '/', rejectAuthorized=false, children}) {
  if (!isReady) {
    return (
      <main className='protected-route'>
        <Preloader />
      </main>
    )
  }
  if (!isAuthorized && !rejectAuthorized) {
    return <Navigate to={redirectPath} replace />;
  }
  if (isAuthorized && rejectAuthorized) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
