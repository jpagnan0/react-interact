// medication reducer
import {
  RECEIVE_MEDICATIONS,
  REQUEST_MEDICATIONS,
  SET_TERM,
  INVALID_TERM
} from '../constants/actionTypes';

function medicationTermSet (state = '', action ) {
  switch (action.type) {
    case SET_TERM:
      return action.medication
    default:
      return state
  }
}

function medications(
  state = {
    isFetching: false,
    didInvalidate: false,
    medications: []
  }, action) {
  switch (action.type) {
    case INVALID_TERM:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_MEDICATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_MEDICATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        medications: action.medications
      })
    default:
      return state
  }
}

function medicationsByName(state = {}, action) {
  switch (action.type) {
    case INVALID_TERM:
    case RECEIVE_MEDICATIONS:
    case REQUEST_MEDICATIONS:
      return Object.assign({}, state, {
        [action.medication]: medications(state[action.medication], action)
      })
    default:
      return state
  }
}


// function medicationReducer(state=initialMedicationState, action) {
//   console.log('%c medicationReducer()', 'color: white');
//
//   switch (action.type) {
//
//     case RECEIVE_MEDICATIONS: {
//       return {...state, searchTerm: action.payload }
//     }
//     case REQUEST_MEDICATIONS: {
//       return {...state.medications, medications: [...action.payload]}
//     }
//     default: return state
//   }
// }
const medicationReducer = {
  medicationTermSet,
  medicationsByName
}
export default medicationReducer;
