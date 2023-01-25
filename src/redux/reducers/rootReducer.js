import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookReviewReducer from "./bookReviewReducer";
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    bookReview: bookReviewReducer,
    auth: authReducer
});

export default rootReducer;