import { types } from "../types/types";
import { toast } from "react-hot-toast";
import { fetchTokenHelper } from "../helpers/fetchToken";
import { desactiveLoading } from "./ui";
import { verifyTokenStore } from "../helpers/token-store";

export const getAsyncTodo = () => {
  return async (dispatch) => {
    try {
      const token = verifyTokenStore();

      if (!token) {
        return toast.error("Token is not valid");
      }

      const { ok, todos } = await fetchTokenHelper("/todo", "GET", token);

      todos.sort(() => {
        return -1;
      });

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

    try {
      const token = verifyTokenStore();

      if (!token) {
        return toast.error("Token is not valid");
      }

      const { ok, todo } = await fetchTokenHelper(
        "/todo",
        "POST",
        token,
        values
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

    try {
      const token = verifyTokenStore();

      if (!token) {
        return toast.error("Token is not valid");
      }

      const { ok } = await fetchTokenHelper("/todo", "DELETE", token, {}, id);

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

    try {
      const token = verifyTokenStore();

      if (!token) {
        return toast.error("Token is not valid");
      }

      const { ok } = await fetchTokenHelper(
        "/todo",
        "PUT",
        token,
        { pending: !pending },
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
