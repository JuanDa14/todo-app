import { types } from "../types/types";

const initialState = {
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginUser:
      return { ...state, user: action.payload };

    case types.logoutUser:
      return { ...state, user: null };

    default:
      return { ...state };
  }
};
