import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/actionTypes/authTypes";

const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_SUCCESS:
            console.log('log in success')
            return {
                ...state,
                authError: null
            }

        case LOGIN_FAILED:
            return {
                ...state,
                authError: 'Login failed'
            }

        case LOGOUT_SUCCESS:
            return state

        default:
            return state
    }
}

export default authReducer;