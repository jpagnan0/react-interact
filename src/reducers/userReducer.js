const initialState = {
  token: '',
  user: {},
  loggedIn: false,
  loggedOut: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.token,
        user: action.user,
        loggedIn: true,
        loggedOut: false
      }
    case "LOGOUT":
      return {
        ...state,
        token: '',
        user: {},
        loggedIn: false,
        loggedOut: true
      }
    default:
      return state
  }
}

export {
  userReducer
}
