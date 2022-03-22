import { useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { toast } from "react-hot-toast";

import useForm from "../../hooks/useForm";
import { resetAsyncPassword } from "../../actions/auth";

const ResetPasswordScreen = () => {
  const [{ password, password2 }, handleInputChange] = useForm({
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();

  const location = useLocation();

  const navigate = useNavigate();

  const resetLink = `${location.pathname}${location.search}`;

  const { q: token } = queryString.parse(location.search);

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (password !== password2) return toast.error("Passwords do not match");
    dispatch(resetAsyncPassword({ password, resetLink }, token));
    navigate("/auth/login", { replace: true });
  };

  if (!token) {
    return <Navigate to="/auth/forgotpassword" />;
  }

  return (
    <div className="wrap">
      <div className="container container_login">
        <div className="row row_login justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="login-wrap p-4 p-md-5 shadow p-3 mb-5 bg-body rounded">
              <div className="d-flex align-items-center justify-content-center">
                <span className="fa-solid fa-unlock-keyhole rounded-circle icon"></span>
              </div>

              <p className="text-center">
                You can reset your password within the next 5 min, make sure it
                meets the given specifications.
              </p>

              <form onSubmit={handleResetPassword} className="login-form">
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control input_login rounded mt-3"
                    placeholder="New password"
                    required
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    minLength="6"
                    autoComplete="false"
                  />
                  <input
                    type="password"
                    className="form-control input_login rounded mt-3"
                    placeholder="Confirm new password"
                    required
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    minLength="6"
                    autoComplete="false"
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control input_login btn btn-primary rounded mt-3"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
