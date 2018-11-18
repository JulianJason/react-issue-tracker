import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED, USER_LOGOUT
} from "../actions/constants";

const authInitialState = {
    isAuthenticating: false,
    authData: {
        username: null,
    },
    error: false,
    errorMessage: null
}

function authReducer(state = authInitialState, action) {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isAuthenticating: true,
            };
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticating: false,
                authData: {
                    userName: action.response.username
                }
            };
        case USER_LOGIN_FAILED:
            return {
                ...state,
                isAuthenticating: false,
                error: true,
                errorMessage: action.response.errorMessage
            };
        case USER_LOGOUT:
            return {
                ...state,
                authData: {
                    username: null
                }
            };
        default:
            return state;
    }
}

export default authReducer;
