import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LOGIN_ROUTE } from "../utils/constants";

const AuthCheck = () => {
  const location = useLocation();
  const { user } = useAuth();

  const content = user ? (
    <Outlet />
  ) : (
    <Navigate to={LOGIN_ROUTE} state={{ from: location }} replace />
  );

  return content;
};

export default AuthCheck;
