import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginAsyncUser } from "../actions/auth";
import { Toaster } from "react-hot-toast";
import useForm from "../hooks/useForm";

const LoginScreen = () => {
  const [formValues, handleInputChange, reset] = useForm({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const { username, password } = formValues;

  const handleSetValues = (e) => {
    e.preventDefault();
    dispatch(loginAsyncUser({ email: username, password }));
    reset();
  };

  return (
    <div className="wrap">
      <div className="container container_login">
        <div className="row row_login justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="login-wrap p-4 p-md-5 shadow p-3 mb-5 bg-body rounded">
              <div className="d-flex align-items-center justify-content-center">
                <span className="fa-solid fa-user rounded-circle"></span>
              </div>
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fa fa-user-o"></span>
              </div>
              <h3 className="text-center mb-4">Sign In</h3>
              <form onSubmit={handleSetValues} className="login-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input_login rounded mt-3"
                    placeholder="Username"
                    required
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    minLength="3"
                  />
                </div>
                <div className="form-group d-flex">
                  <input
                    type="password"
                    className="form-control input_login rounded mt-3"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    minLength="6"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control input_login btn btn-primary rounded submit px-3 mt-3"
                  >
                    Login
                  </button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="text-md-left text-center mt-3">
                    <Link to="/auth/register">Create new account</Link>
                  </div>
                  {/* <div className="text-md-right text-center mt-3">
                    <Link to="/">Forgot Password</Link>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />;
    </div>
  );
};

export default LoginScreen;
