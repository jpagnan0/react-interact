import {GET_USER_INTERACTIONS } from "../constants/actionTypes";
// import { push } from "connected-react-router";
const API = `http://localhost:3000/api/v1`;

export function userInteractions(id, dispatch) {
  return dispatch => {
    return fetch(`${API}/user_interactions/${id}`)
      .then(r => r.json())
      .then((res => dispatch({ type: GET_USER_INTERACTIONS, payload: res})))
  };
}
