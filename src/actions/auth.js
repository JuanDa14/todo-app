import { fetchHelper } from "../helpers/fetch";
import { types } from "../types/types";
import { activeLoading, desactiveLoading } from "./ui";
import { toast } from "react-hot-toast";
import { getAsyncTodo } from "./todo";

export const loginAsyncUser = (values) => {
  return async (dispatch) => {
    try {
      dispatch(activeLoading());

      const { ok, token, name, uid } = await fetchHelper(
        "/login",
        "POST",
        values
      );

      if (!ok) {
        toast.error("Wrong Credentials!");
        dispatch(desactiveLoading());
        throw new Error("Algo salio mal");
      }

      localStorage.setItem("token", token);

      dispatch(loginSyncUser({ name, uid }));
      dispatch(getAsyncTodo());
    } catch (error) {
      console.log(error);
    }
  };
};

export const verifyAsynctoken = (token) => {
  return async (dispatch) => {
    try {
      dispatch(activeLoading());

      const { ok, username, uid } = await fetchHelper("/token", "POST", token);

      if (!ok) {
        toast.error("Session Finished!");
        localStorage.clear();
        dispatch(desactiveLoading());
        throw new Error("Algo salio mal");
      }

      dispatch(loginSyncUser({ name: username, uid }));
      dispatch(getAsyncTodo());
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerAsyncUser = (values) => {
  return async (dispatch) => {
    try {
      dispatch(activeLoading());

      const { ok, uid, name, token } = await fetchHelper(
        "/register",
        "POST",
        values
      );

      if (!ok) {
        toast.error("Something went wrong!");
        dispatch(desactiveLoading());
        throw new Error("Algo salio mal");
      }

      localStorage.setItem("token", token);

      dispatch(loginSyncUser({ name, uid }));
      dispatch(desactiveLoading());
    } catch (error) {
      console.log(error);
    }
  };
};

const loginSyncUser = (user) => ({
  type: types.loginUser,
  payload: user,
});

export const logoutSyncUser = () => ({
  type: types.logoutUser,
});
