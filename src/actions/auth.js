import {AUTHENTICATED, UNAUTHENTICATED, AUTH_ERROR, LOGIN} from "../constants/actionTypes";
import { push } from 'connected-react-router'

const API = `http://localhost:3000/api/v1`;

export function setCurrentUser(currentUser) {
  const {name, username, password} = currentUser
  return {
    user: {
      name: name,
      username: username,
      password: password
    }
  }
}

export function getCurrentUser(currentUser) {
  const { username, password } = currentUser
  return {
    user: {
      username: username,
      password: password
    }
  }
}

export function login({username, password}) {
  const request = new Request(`${API}/auth`, {
    method: "POST",
    headers: new Headers({"Content-Type": "application/json", "Authorization": `Bearer ${localStorage.token}`}),
    body: JSON.stringify({user:{ username: username, password: password }})
  })
  return dispatch => {
    return fetch(request).then(res => res.json()).then(res => {
      const {user, jwt} = res

      // if(jwt === localStorage.token)
        dispatch({type: LOGIN, payload: user, token: jwt})
        dispatch(push('/'))

    }).catch((err) => { alert(err)})
  }

}

export function signup(user, dispatch) {
  // console.log("user in auth action: ", user)
  return dispatch => {
    return fetch(`${API}/users`, {
     method: "POST",
     headers: {
       "Accept":"application/json",
       "Content-Type":"application/json"
     },
     body: JSON.stringify(setCurrentUser(user))
   })
   .then(res=> res.json())
   .then(res => {
     const {jwt, user} = res
      dispatch({
        type: AUTHENTICATED,
        payload: {
          jwt,
          user
        }
      })
      localStorage.setItem('token', jwt)
      dispatch(push('/'))
    })

  }

}
