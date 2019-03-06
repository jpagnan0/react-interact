import { POST_USER_MEDICATIONS, GET_USER_MEDICATIONS} from '../constants/actionTypes';

export function currentUserMedications(state={}, action) {
  switch (action.type) {
    // const {medications} = action.payload
    case POST_USER_MEDICATIONS:
      // return {state.loggedInUser.medications}
      return {
        ...state,
        // userMedications: action.payload
      }
    case GET_USER_MEDICATIONS:
// {getState(),loggedInUser}
      return {
        ...state,
        userMedications: action.payload
      }

    // case GET_USER_MEDICATIONS:
    //   //
    //   return {
    //     ...state,
    //     ...{id, rxcui, name, name_alt}
    //   }
    default:
      return state
  }
}
