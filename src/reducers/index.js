import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import {medicationTerm, medicationsReducer} from './medicationSearchReducer';
import {authReducer, currentUser} from './authReducer';
import {currentUserMedications} from './currentUserMedications';

const rootReducer = (history) => combineReducers({
  loggedInUser: currentUser,
  auth:  authReducer,
  medicationTerm: medicationTerm,
  medicationsReducer: medicationsReducer,
  currentUserMedications: currentUserMedications,
  router: connectRouter(history),
});

export default rootReducer;
