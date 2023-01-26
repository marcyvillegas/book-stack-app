import { LOGIN_SUCCESS } from "./actionTypes/authTypes";
import { LOGIN_FAILED } from "./actionTypes/authTypes";

import { LOGOUT_SUCCESS } from "./actionTypes/authTypes";

import { SIGNUP_SUCCESS } from "./actionTypes/authTypes";

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

const signUpSuccess = () => {
    return {
        type: SIGNUP_SUCCESS
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

        } catch (error) {
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
        } catch (error) {
            // dispatch error
        }
    }
}

export const signUp = (newUser) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();

        try {

            const createdUser = await firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password)

            await firestore.collection('users').doc(createdUser.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });

            dispatch(signUpSuccess());

        } catch (error) {
            console.log(error)
        }
    }
}