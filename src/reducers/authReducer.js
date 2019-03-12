import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_ERROR,
  LOGIN,
} from "../constants/actionTypes";

export function authReducer(
  state = {
    user: {
      name: "",
      username: "",
      password: "",
      confirmPassword: ""
    },
    submitted: false
  },
  action
) {
  switch (action.type) {
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
    default:
      return state;
  }
}

export function currentUser(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      const { token } = action;
      const { id, name, username, medications  } = action.payload;
      return {
        ...state,
        ...{ id, name, username, medications, token }
      };
    
    default:
      return state;
  }
}
