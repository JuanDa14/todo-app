import { types } from "../types/types";

const initialState = {
  loading: true,
  open: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.activeLoading:
      return { ...state, loading: true };

    case types.desactiveLoading:
      return { ...state, loading: false };

    case types.openModal:
      return { ...state, open: true };

    case types.closeModal:
      return { ...state, open: false };

    default:
      return { ...state };
  }
};
