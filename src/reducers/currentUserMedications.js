import { POST_USER_MEDICATIONS, GET_USER_MEDICATIONS} from '../constants/actionTypes';

export function currentUserMedications(state={}, action) {
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
    default:
      return state
  }
}
