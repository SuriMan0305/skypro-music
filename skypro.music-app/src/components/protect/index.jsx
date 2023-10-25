import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/login", isAuthorize }) => {
  if (!isAuthorize) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />
};
