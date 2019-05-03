import { SHOW_DATES, ADD_DATE, DELETE_DATE } from "../actions/types";

//State inicial, cada reducer debe tener su propio state

const initialState = {
  dates: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_DATES:
      return {
        ...state
      };
    default:
      return state;
  }
}
