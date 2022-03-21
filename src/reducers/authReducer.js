import { types } from "../types/types";

const initialState = {
  user: null,
  tokenExpired: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginUser:
      return { ...state, user: action.payload };

    case types.logoutUser:
      return { ...state, user: null };

    case types.tokenExpired:
      return { ...state, tokenExpired: true };

    case types.tokenNotExpired:
      return { ...state, tokenExpired: false };

    default:
      return { ...state };
  }
};
