import { POST_USER_MEDICATIONS, GET_USER_MEDICATIONS } from "../constants/actionTypes";
import { push } from "connected-react-router";
const API = `http://localhost:3000/api/v1`;

export function postUserMedication({ rxcui, name, name_alt},id, dispatch) {
  return dispatch => {
    return fetch(`${API}/user_medications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        rxcui,
        name,
        name_alt,
        user_id: id
      })
    })
      .then(r => r.json())
      .then(res => dispatch({ type: POST_USER_MEDICATIONS, payload: res}));
  };
}

export function getUserMedications (id, dispatch) {
  return dispatch => {
    return fetch(`${API}/user/${id}`)
    .then(r => r.json())
    .then(res => dispatch({ type: GET_USER_MEDICATIONS, payload: res}))
  }
};
export function updateUserMedications(id) {
 return dispatch => dispatch(getUserMedications(id))
}
