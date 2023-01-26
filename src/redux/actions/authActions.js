import { LOGIN_SUCCESS } from "./actionTypes/authTypes";
import { LOGIN_FAILED } from "./actionTypes/authTypes";

import { LOGOUT_SUCCESS } from "./actionTypes/authTypes";

const logInSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
}

const logInFailed = () => {
    return {
        type: LOGIN_FAILED
    }
}

const logOutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const logIn = (credentials) => {
    return async (dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();

        try {

            await firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            );

            dispatch(logInSuccess());

        } catch(error) {
            dispatch(logInFailed());
        }
    }
}

export const logOut = () => {
    return async (dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();

        try {
            await firebase.auth().signOut();
            dispatch(logOutSuccess());
            console.log("logout")
        } catch(error) {
            // dispatch error
        }
    }
}