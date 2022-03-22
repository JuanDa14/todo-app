import { types } from "../types/types";

export const activeLoading = () => ({
  type: types.activeLoading,
});

export const desactiveLoading = () => ({
  type: types.desactiveLoading,
});

export const openModal = () => ({
  type: types.openModal,
});

export const closeModal = () => ({
  type: types.closeModal,
});
