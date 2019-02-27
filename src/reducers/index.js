import { combineReducers } from "redux";
import {
  RECEIVE_MEDICATIONS,
  SET_TERM,
  INVALID_TERM
} from "../constants/actionTypes";

function medicationTerm(state = '', action) {
  console.log('state in medicationTermReducer:', state)
  console.log('action in medicationTermReducer:', action)
  switch (action.type) {
    case SET_TERM:
      return {search: action.medicationTerm.join('')}
    default:
      return state;
  }
}



function medicationsReducer(state = {
    medications: []
  } , action) {
  console.log('state in medicationsReducer:', state)
  console.log('state in medicationsReducer:', action)
  switch (action.type) {

    case RECEIVE_MEDICATIONS:
      console.log("state in RECEIVE_MEDICATIONS:", state)
      console.log("state in RECEIVE_MEDICATIONS:", action)
      return Object.assign({}, state, {
        medications: action.medications
      });
    case "TYPING":
      return Object.assign({}, state, {
        medications: action.medications
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  medicationTerm: medicationTerm,
  medicationsReducer: medicationsReducer
});

export default rootReducer;
