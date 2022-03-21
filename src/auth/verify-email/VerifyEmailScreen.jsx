import React, { useEffect } from "react";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { tokenSyncNoExpired, verifyAsyncEmail } from "../../actions/auth";

const VerifyEmailScreen = () => {
  const dispatch = useDispatch();

  const { tokenExpired } = useSelector((state) => state.auth);

  const location = useLocation();

  const navigate = useNavigate();

  const linkVerifyEmail = `${location.pathname}${location.search}`;

  const { q: token } = queryString.parse(location.search);

  useEffect(() => {
    if (tokenExpired) {
      navigate("/auth/login", { replace: true });
      return dispatch(tokenSyncNoExpired());
    }
    dispatch(verifyAsyncEmail({ linkVerifyEmail }, token));
  }, [dispatch, token, linkVerifyEmail, navigate, tokenExpired]);

  if (!token) {
    return <Navigate to="/auth/login" />;
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
                Verified email, redirecting to the main page, enjoy the app
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailScreen;
