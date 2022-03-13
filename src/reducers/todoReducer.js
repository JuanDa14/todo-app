import { types } from "../types/types";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getTodo:
      return [...state, ...action.payload];

    case types.clearTodos:
      return [];

    case types.addTodo:
      return [...state, action.payload];

    case types.removeTodo:
      return state.filter((todo) => todo._id !== action.payload);

    case types.updatedTodo:
      return state.map(({ pending, ...todo }) =>
        todo._id === action.payload
          ? { pending: !pending, ...todo }
          : { pending, ...todo }
      );

    default:
      return state;
  }
};
