import {
  SIGNUP,
  LOGIN,
  LOGOUT
} from '../constants/actionTypes';


const setToken = (jwt) => {
  localStorage.setItem('token', jwt)
  return {
    type: SIGNUP,
    token: jwt
  }
}
const setCurrentUser = (user, token) => {
  return {
    type: LOGIN,
    user: user,
    token: token
  }
}
// const signUp = (jwt, user, dispatch) => {
//     return dispatch => {
//         dispatch({token: setToken(jwt), user: setCurrentUser(user, jwt)})
//     }
// }

const logIn = (token) => {
  console.log(setToken({token}))
  console.log(setCurrentUser({user, token}))
}
export {
  setToken,
  setCurrentUser,
  signUp
}
