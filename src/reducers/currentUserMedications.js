import { POST_USER_MEDICATIONS, GET_USER_MEDICATIONS, GET_USER_INTERACTIONS} from '../constants/actionTypes';

export function currentUserMedications(state={
  interactions: []
}, action) {
  switch (action.type) {
    case POST_USER_MEDICATIONS:
      return {
        ...state,
      }
    case GET_USER_MEDICATIONS:
      return {
        ...state,
        userMedications: action.payload
      }
    case GET_USER_INTERACTIONS:
      return {
        ...state,
        interactions: action.payload
      }
    default:
      return state
  }
}
