import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import ForgotPasswordScreen from "../auth/forgot-password/ForgotPasswordScreen";
import ResetPasswordScreen from "../auth/forgot-password/ResetPasswordScreen";
import LoginScreen from "../auth/LoginScreen";
import RegisterScreen from "../auth/RegisterScreen";
import VerifyEmailScreen from "../auth/verify-email/VerifyEmailScreen";

const AuthRouter = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="forgotpassword" element={<ForgotPasswordScreen />} />
          <Route path="resetpassword" element={<ResetPasswordScreen />} />
          <Route path="verify-email" element={<VerifyEmailScreen />} />
          <Route path="*" element={<LoginScreen />} />
        </Routes>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default AuthRouter;
