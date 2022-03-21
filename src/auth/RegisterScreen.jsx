import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerAsyncUser } from "../actions/auth";
import useForm from "../hooks/useForm";
import { Toaster, toast } from "react-hot-toast";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formValues;

  const handleSetValues = (e) => {
    e.preventDefault();
    if (password.trim() !== password2.trim()) {
      toast.error("Check your details!");
      return reset();
    } else {
      dispatch(registerAsyncUser({ username, email, password }));
    }
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

              <h3 className="text-center mb-4">Register Account</h3>

              <form onSubmit={handleSetValues} className="login-form">
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control input_login rounded"
                    placeholder="Username"
                    required
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    minLength="3"
                    autoComplete="false"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control input_login rounded"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    autoComplete="false"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="password"
                    className="form-control input_login rounded"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    autoComplete="false"
                    minLength="6"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control input_login rounded"
                    placeholder="Repeat Password"
                    required
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    autoComplete="false"
                    minLength="6"
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control input_login btn btn-primary rounded mt-3"
                  >
                    Register
                  </button>
                </div>

                <div className="mt-2">
                  <div className="text-center">
                    <Link to="/auth/login">You already have an account?</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default RegisterScreen;
