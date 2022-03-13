import { types } from "../types/types";

const initialState = {
  loading: true,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.activeLoading:
      return { loading: true };

    case types.desactiveLoading:
      return { loading: false };

    default:
      return { ...state };
  }
};
