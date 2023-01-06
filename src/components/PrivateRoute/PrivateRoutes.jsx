import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
export default PrivateRoutes;
