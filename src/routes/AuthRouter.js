import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../auth/LoginScreen";
import RegisterScreen from "../auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />
      <Route path="*" element={<LoginScreen />} />
    </Routes>
  );
};

export default AuthRouter;
