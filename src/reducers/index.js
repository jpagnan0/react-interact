import { combineReducers } from "redux";
import {
  RECEIVE_MEDICATIONS,
  SET_TERM,
  INVALID_TERM,
  SET_RXCUI,
  ADD_USER_MEDICATION,
  AUTH_REQ,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGOUT,
} from "../constants/actionTypes";

function medicationTerm(state = "", action) {
  console.log("state in medicationTermReducer:", state);
  console.log("action in medicationTermReducer:", action);
  switch (action.type) {
    case SET_TERM:
      return { search: action.medicationTerm.join("") };
    default:
      return state;
  }
}

function medicationsReducer(
  state = {
    medications: []
  },
  action
) {
  console.log("state in medicationsReducer:", state);
  console.log("state in medicationsReducer:", action);
  switch (action.type) {
    case RECEIVE_MEDICATIONS:
      console.log("state in RECEIVE_MEDICATIONS:", state);
      console.log("state in RECEIVE_MEDICATIONS:", action);
      return Object.assign({}, state, {
        medications: action.medications
      });
    case "TYPING":
      return Object.assign({}, state, {
        medications: action.medications
      });
    default:
      return state;
  }
}

function medicationRxcui(
  state = {
    rxcui: ""
  },
  action
) {
  // debugger
  switch (action.type) {
    case SET_RXCUI:
      return Object.assign({}, state, {
        rxcui: action.rxcui
      });
    default:
      return state;
  }
}

function userRxcuis(
  state = {
    rxcuis: []
  },
  action
) {
  switch (action.type) {
    case ADD_USER_MEDICATION:
      return Object.assign({}, state, {
        rxcuis: state.rxcuis
      });
    default:
      return state;
  }
}

function authReducer(state = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {},
  token: null,
  errors: []
}, action ) {
  switch (action.type) {
    case 'LOGIN':

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticating: false,
        currentUser: {},
        token: null
      };
    default:
      return state
  }

}

const rootReducer = combineReducers({
  medicationTerm: medicationTerm,
  medicationsReducer: medicationsReducer,
  medicationRxcui: medicationRxcui,
  userRxcuis: userRxcuis,
  authReducer: authReducer,
});

export default rootReducer;
