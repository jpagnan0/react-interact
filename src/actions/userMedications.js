import axios from 'axios'
import { SET_RXCUI, ADD_USER_MEDICATION } from '../constants/actionTypes';

const users = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  url: '/users'
})
export function setRxcui(rxcui) {
  return {
    type: SET_RXCUI,
    rxcui,
  }
}

export function addToUserMedications(rxcuis) {
  return {
    type: ADD_USER_MEDICATION,
    rxcuis
  }
}

export function dispatchRxcui(rxcui) {
  return dispatch => {
    dispatch({
      type: SET_RXCUI,
      rxcui: rxcui
    })
  }
}

export function dispatchRxcuis(rxcuis) {
  return dispatch => {
    dispatch({
      type: ADD_USER_MEDICATION,
      rxcuis: rxcuis
    })
  }
}
