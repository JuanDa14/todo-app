import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginAsyncFacebook, loginAsyncUser } from "../actions/auth";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

import useForm from "../hooks/useForm";

const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { email, password } = formValues;

  const handleSetValues = (e) => {
    e.preventDefault();
    dispatch(loginAsyncUser({ email, password }, "/login"));
  };

  const handleLoginGoogle = ({ tokenId }) => {
    dispatch(loginAsyncUser({ tokenId }, "/google"));
  };

  const handleErrorGoogle = ({ error }) => {
    console.log(error);
  };

  const handleLoginFacebook = ({ accessToken }) => {
    dispatch(loginAsyncFacebook(accessToken));
  };

  return (
    <div className="wrap">
      <div className="container container_login">
        <div className="row row_login justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="login-wrap p-4 p-md-5 shadow p-3 mb-5 bg-body rounded">
              <div className="d-flex align-items-center justify-content-center">
                <span className="fa-solid fa-user rounded-circle icon"></span>
              </div>

              <h3 className="text-center mb-4">Sign In</h3>
              <form onSubmit={handleSetValues} className="login-form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control input_login rounded mt-3"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    minLength="3"
                  />
                </div>
                <div className="login__link">
                  <Link
                    to="/auth/forgotpassword"
                    className="login__link-forgotpassword"
                  >
                    Forgot Password
                  </Link>
                </div>
                <div className="form-group d-flex">
                  <input
                    type="password"
                    className="form-control input_login rounded"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    minLength="6"
                    autoComplete="false"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control input_login btn btn-secondary rounded mt-3"
                  >
                    Login
                  </button>
                </div>

                <GoogleLogin
                  className="input_login rounded px-3 mt-2 text-center"
                  clientId={process.env.REACT_APP_GOOGLE_ID_CLIENT}
                  onSuccess={handleLoginGoogle}
                  onFailure={handleErrorGoogle}
                  cookiePolicy={"single_host_origin"}
                  autoLoad={false}
                ></GoogleLogin>

                <FacebookLogin
                  cssClass="btn btn-primary mt-2 input_login text-center"
                  appId={process.env.REACT_APP_FACEBOOK_ID}
                  callback={handleLoginFacebook}
                  textButton=" Sign in with Facebook"
                  autoLoad={false}
                  icon="fa-brands fa-facebook-square fs-4"
                ></FacebookLogin>

                <div className="form-group d-md-flex">
                  <div className="text-md-left text-center mt-3 w-100">
                    <Link to="/auth/register">Create new account</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
