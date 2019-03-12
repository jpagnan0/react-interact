import { POST_USER_MEDICATIONS, GET_USER_MEDICATIONS } from "../constants/actionTypes";
const API = `http://localhost:3000/api/v1`;
export function getUserMeds() {
  return  { type: GET_USER_MEDICATIONS }
}
export function postUserMedication({ rxcui, name, name_alt},id, dispatch) {
  return dispatch => {
    dispatch(updateUserMedications(id))
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
      .then(res => dispatch({ type: POST_USER_MEDICATIONS, payload: res}))
      .then(() =>  dispatch(updateUserMedications(id)));
  };
}

export function getUserMedications (id, dispatch) {
  return dispatch => {
    return fetch(`${API}/user/${id}`)
    .then(r => r.json())
    .then(res => dispatch({ type: GET_USER_MEDICATIONS, payload:res.medications}))
  }
};
export function updateUserMedications(id) {
 return dispatch => dispatch(getUserMedications(id))
}
