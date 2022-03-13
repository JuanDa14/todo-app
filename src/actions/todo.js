import { types } from "../types/types";
import { toast } from "react-hot-toast";
import { fetchTokenHelper } from "../helpers/fetchToken";
import { desactiveLoading } from "./ui";

export const getAsyncTodo = () => {
  return async (dispatch) => {
    if (!localStorage.getItem("token")) {
      return toast.error("Token is not valid");
    }

    const token = localStorage.getItem("token");
    try {
      const { ok, todos } = await fetchTokenHelper("/todo", "GET", {}, token);

      if (!ok) {
        return toast.error("Error fetching todos");
      }
      dispatch(getSyncTodo(todos));
      dispatch(desactiveLoading());
    } catch (error) {
      console.log(error);
    }
  };
};

const getSyncTodo = (todo) => ({
  type: types.getTodo,
  payload: todo,
});

export const addAsyncTodo = (values) => {
  return async (dispatch) => {
    const toastId = toast.loading("loading...");

    if (!localStorage.getItem("token")) {
      return toast.error("Token is not valid");
    }

    try {
      const token = localStorage.getItem("token");
      const { ok, todo } = await fetchTokenHelper(
        "/todo",
        "POST",
        values,
        token,
        ""
      );

      if (!ok) {
        return toast.error("Error fetching todos");
      }

      dispatch(AddSyncTodo(todo));
      toast.success("Todo added!", { id: toastId });
    } catch (error) {
      console.log(error);
    }
  };
};

const AddSyncTodo = (todo) => ({
  type: types.addTodo,
  payload: todo,
});

export const removeAsyncTodo = (id) => {
  return async (dispatch) => {
    const toastId = toast.loading("loading...");

    if (!localStorage.getItem("token")) {
      return toast.error("Token is not valid");
    }

    try {
      const token = localStorage.getItem("token");
      const { ok } = await fetchTokenHelper("/todo", "DELETE", {}, token, id);

      if (!ok) {
        return toast.error("Error fetching todos");
      }

      dispatch(removeSyncTodo(id));
      toast.success("Remove todo!", { id: toastId });
    } catch (error) {
      console.log(error);
    }
  };
};

const removeSyncTodo = (id) => ({
  type: types.removeTodo,
  payload: id,
});

export const updatedAsyncTodo = (id, pending) => {
  return async (dispatch) => {
    const toastId = toast.loading("loading...");
    console.log(pending);
    if (!localStorage.getItem("token")) {
      return toast.error("Token is not valid");
    }

    try {
      const token = localStorage.getItem("token");
      const { ok } = await fetchTokenHelper(
        "/todo",
        "PUT",
        { pending: !pending },
        token,
        id
      );

      if (!ok) {
        return toast.error("Error fetching todos");
      }

      dispatch(updatedSyncTodo(id));
      toast.success("Updated todo!", { id: toastId });
    } catch (error) {
      console.log(error);
    }
  };
};

const updatedSyncTodo = (id) => ({
  type: types.updatedTodo,
  payload: id,
});

export const clearTodos = () => ({
  type: types.clearTodos,
});
