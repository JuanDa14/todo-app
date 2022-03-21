import React from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { forgotAsyncPassword } from "../../actions/auth";
import useForm from "../../hooks/useForm";

const ForgotPasswordScreen = () => {
  const [{ email }, handleInputChange] = useForm({
    email: "",
  });

  const dispatch = useDispatch();

  const handleSetEmail = (e) => {
    e.preventDefault();
    dispatch(forgotAsyncPassword({ email }));
  };

  return (
    <div className="wrap">
      <div className="container container_login">
        <div className="row row_login justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="login-wrap p-4 p-md-5 shadow p-3 mb-5 bg-body rounded">
              <div className="d-flex align-items-center justify-content-center">
                <span className="fa-solid fa-hammer rounded-circle icon"></span>
              </div>

              <p className="text-center">
                Forgot your password? No problem. Simply let us know your email
                address and we'll send you a password reset link that will allow
                you to choose a new one. If you are authenticated with Google,
                you must change your password from your Google account.
              </p>

              <form onSubmit={handleSetEmail} className="login-form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control input_login rounded mt-3"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control input_login btn btn-primary rounded mt-3"
                  >
                    Send link to reset password
                  </button>
                </div>
              </form>

              <div className="form-group d-md-flex">
                <div className="text-md-left text-center mt-3 w-100">
                  <Link to="/auth/login">You already have an account?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />;
    </div>
  );
};

export default ForgotPasswordScreen;
