import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_ERROR,
  LOGIN,
  LOGOUT,
  RECEIVE_MEDICATIONS,
  SET_TERM,
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

function authReducer(state={
  user: {
    name: "",
    username: "",
    password: "",
    confirmPassword: ""
  },
  submitted: false
}, action) {
  // debugger
  switch(action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        token: action.payload.jwt,
        user: action.payload.user,
        submitted: true
      };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}

function currentUser (state = {
  username: "",
  password: ""
}, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload.user}
    case LOGOUT:
      return {...state, user: {}}
    default:
      return state
  }
}

const rootReducer = (history) => combineReducers({
  medicationTerm: medicationTerm,
  medicationsReducer: medicationsReducer,
  user: currentUser,
  auth:  authReducer,
  router: connectRouter(history),
});

export default rootReducer;
