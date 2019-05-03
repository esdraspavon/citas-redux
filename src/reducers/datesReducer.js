import { SHOW_DATES, ADD_DATE, DELETE_DATE } from "../actions/types";

//State inicial, cada reducer debe tener su propio state

const initialState = {
  dates: [
    {
      id: "0",
      date: "10-20-30",
      time: "10:30",
      name: "Garrs",
      own: "Esdras",
      symptom: "Tiene mucha hambre"
    },
    {
      id: "1",
      date: "10-20-30",
      time: "10:30",
      name: "Cattie",
      own: "Esdras",
      symptom: "Tiene mucha hambre"
    }
  ]
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
