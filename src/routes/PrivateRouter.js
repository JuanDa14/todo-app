import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  return !user ? <Navigate to="/auth/login" /> : children;
};

export default PrivateRouter;
