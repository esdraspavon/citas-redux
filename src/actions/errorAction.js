import { VALIDATE_FORM, SHOW_ERROR } from "./types";

export const validateForm = state => {
  return {
    type: VALIDATE_FORM,
    payload: state
  };
};
