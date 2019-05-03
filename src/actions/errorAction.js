import { SHOW_ERROR } from "./types";

export const showError = state => {
  return {
    type: SHOW_ERROR,
    payload: state
  };
};
