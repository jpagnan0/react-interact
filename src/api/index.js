import axios from 'axios';

import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTH_ERROR
} from "../constants/actionTypes";

const API = `http://localhost:3000/api/v1`;

export const signIn = ({name, username, password}, history) => {
  return async (dispatch) => {
    const res = axios.post(`${API}/users`, {name, username, password})
    dispatch({type: AUTHENTICATED})
    localStorage.setItem('token', res.jwt)
  } catch(err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid username or pw'
    })
  }
}
