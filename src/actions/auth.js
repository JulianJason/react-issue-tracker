import {
    USER_LOGIN,
    USER_LOGOUT
} from "./constants";

export const userLoginAction = (username, password) => (
    {
        type: USER_LOGIN,
        payload: { username, password }
    }
);

export const userLogoutAction = () => ({
    type: USER_LOGOUT
})
