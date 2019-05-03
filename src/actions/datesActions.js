import { SHOW_DATES, ADD_DATE, DELETE_DATE } from "./types";

export const getDates = () => {
  return {
    type: SHOW_DATES
  };
};

export const addDate = date => {
  return {
    type: ADD_DATE,
    payload: date
  };
};
