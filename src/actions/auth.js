import { fetchHelper } from "../helpers/fetch";
import { types } from "../types/types";
import { activeLoading, desactiveLoading } from "./ui";
import { toast } from "react-hot-toast";
import { getAsyncTodo } from "./todo";
import { fetchTokenHelper } from "../helpers/fetchToken";

export const loginAsyncUser = (body, endpoint) => {
  return async (dispatch) => {
    try {
      dispatch(activeLoading());

      const { ok, token, username, uid, msg } = await fetchHelper(
        endpoint,
        "POST",
        body
      );

      if (!ok) {
        toast.error(msg);
        dispatch(desactiveLoading());
        throw new Error("Something went wrong");
      }

      if (msg) {
        toast.success(msg);
        return dispatch(desactiveLoading());
      }

      localStorage.setItem("token", token);
      dispatch(loginSyncUser({ username, uid }));
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

      const { ok, username, uid } = await fetchTokenHelper(
        "/token",
        "GET",
        token
      );

      if (!ok) {
        localStorage.clear();
        toast.error("Session Finished!");
        dispatch(desactiveLoading());
        throw new Error("Something went wrong");
      }

      dispatch(loginSyncUser({ username, uid }));
      dispatch(getAsyncTodo());
    } catch (error) {
      console.log(error);
    }
  };
};

export const verifyAsyncEmail = (body, tokenConfirm) => {
  return async (dispatch) => {
    try {
      dispatch(activeLoading());

      const { ok, username, uid, token } = await fetchTokenHelper(
        "/confirm-email",
        "POST",
        tokenConfirm,
        body
      );

      if (!ok) {
        dispatch(desactiveLoading());
        dispatch(tokenSyncExpired());
        throw new Error("Something went wrong");
      }

      localStorage.setItem("token", token);
      dispatch(loginSyncUser({ username, uid }));
      dispatch(getAsyncTodo());
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerAsyncUser = (body) => {
  return async (dispatch) => {
    try {
      dispatch(activeLoading());

      const { ok, msg } = await fetchHelper("/register", "POST", body);

      if (!ok) {
        toast.error(msg);
        dispatch(desactiveLoading());
        throw new Error(msg);
      }

      toast.success(msg);
      dispatch(desactiveLoading());
    } catch (error) {
      console.log(error);
    }
  };
};

export const forgotAsyncPassword = (email) => {
  return async (dispatch) => {
    try {
      dispatch(activeLoading());

      const { ok, msg } = await fetchHelper("/forgotpassword", "POST", email);

      if (!ok) {
        toast.error(msg);
        dispatch(desactiveLoading());
        throw new Error(msg);
      }

      toast.success(msg);
      dispatch(desactiveLoading());
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetAsyncPassword = (body, token) => {
  return async (dispatch) => {
    try {
      dispatch(activeLoading());

      const { ok, msg } = await fetchTokenHelper(
        "/resetpassword",
        "PUT",
        token,
        body
      );

      if (!ok) {
        toast.error(msg);
        dispatch(desactiveLoading());
        throw new Error(msg);
      }

      toast.success(msg);
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

const tokenSyncExpired = () => ({
  type: types.tokenExpired,
});

export const tokenSyncNoExpired = () => ({
  type: types.tokenNotExpired,
});

export const logoutSyncUser = () => ({
  type: types.logoutUser,
});
