import {AUTH_REQ, AUTH_SUCCESS, AUTH_FAILURE, LOGOUT} from '../constants/actionTypes';
// import axios from 'axios';
// const BASE_URL = 'http://localhost:3000/api/v1'

export const login = (payload) => {
  return { type: 'LOGIN', payload: payload }
}

export const logout = (payload) => {
  return { type: 'LOGOUT', payload: payload }
}
