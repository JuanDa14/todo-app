import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { verifyAsynctoken } from "../actions/auth";
import TodoRouter from "../Components/TodoRouter";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Loading from "../Components/loading/Loading.jsx";
import { desactiveLoading } from "../actions/ui";

const AppRouter = () => {
  const { loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      dispatch(verifyAsynctoken(token));
    } else {
      dispatch(desactiveLoading());
    }
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <TodoRouter />
            </PrivateRouter>
          }
        />
        <Route
          path="/auth/*"
          element={
            <PublicRouter>
              <AuthRouter />
            </PublicRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
