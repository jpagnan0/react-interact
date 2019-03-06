import { POST_USER_MEDICATIONS, GET_USER_MEDICATIONS} from '../constants/actionTypes';

export function currentUserMedications(state={}, action) {
  switch (action.type) {
    case POST_USER_MEDICATIONS:
      // return {state.loggedInUser.medications}
      return state
    case GET_USER_MEDICATIONS:
      const {medications} = state.loggedInUser;
      const {id, rxcui, name, name_alt} = action.payload;
      //
      return {
        ...state,
        ...{id, rxcui, name, name_alt}
      }
    default:
      return state
  }
}
