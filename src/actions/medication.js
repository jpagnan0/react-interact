import fetch from 'cross-fetch';
import {
  RECEIVE_MEDICATIONS,
  REQUEST_MEDICATIONS,
  SET_TERM,
  INVALID_TERM
} from '../constants/actionTypes';

const MEDICATION_URL = `http://localhost:3000/api/v1/search?medication_name=`;

// import MedicationAdapter from '../api/MedicationAdapter';


// function updateMedications(medicationTerm) {
//   return {
//     type: REQUEST_MEDICATIONS,
//     medicationTerm
//   }
// }
export function setTerm(medication) {
  return{
    type: SET_TERM,
    medication
  }
}

export function invalidTerm(medication) {
  return {
    type: INVALID_TERM,
    medication
  }
}
function requestMedications (medication) {
  return {
    type: REQUEST_MEDICATIONS,
    medication
  };
};

export function recieveMedications(medications, json) {
  if(json.status === 500 ) {
    return {
      type: "TYPING"
    }
  }
  else {
  return {
    type: RECEIVE_MEDICATIONS,
    // medication,
    medications: json
  }
}
}

export function fetchMedications(medication) {
  return dispatch => {
    // dispatch(requestMedications(medication))
    if(medication)
    {
      return fetch(`${MEDICATION_URL}${medication}`)
      .then(res => res.json())
      .then(json => dispatch(recieveMedications(medication, json)))
    }
  }
}

// function shouldFetchMedications(state, medication) {
//   const medications = state.medicationsReducer.medications;
//   console.log(`shouldFetchMedications(state, medication): ${(state, medications)}` )
//   if(!medications) {
//     return true
//   }
//   else if (medications.isFetching) {
//     return false
//   }
//   else {
//     return medications.didInvalidate
//   }
// }

export function doFetchMedications(medication) {
  return (dispatch, getState) => {
      return dispatch(fetchMedications(medication))
    }
  }
