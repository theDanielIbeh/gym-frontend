import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Spinner from "react-spinkit"

const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner
    name="ball-spin-fade-loader"
    color="blue"
    fadeIn="none"
    className="h-12 w-12 grid align-middle"
    />
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
