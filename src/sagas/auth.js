import { delay } from 'redux-saga';
import { take, put, call } from 'redux-saga/effects';
import MockAPI from "../services/MockAPI";

import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,

    USER_LOGOUT
} from "../actions/constants";

/** USER LOGIN */
export function* watchUserLogin() {
    while(true) {
        const { payload } = yield take(USER_LOGIN);
        yield call(delay, 3000);
        yield call(loginUserSaga, payload)
    }
}

function* loginUserSaga(payload) {
    try {
        const response = yield call(MockAPI.loginUser, payload);
        if (response.error === false) {
            yield put({ type: USER_LOGIN_SUCCESS, response });
        } else {
            yield put({type: USER_LOGIN_FAILED, response});
        }
    } catch (error) {
        yield put({ type: USER_LOGIN_FAILED, response: { errorMessage: error }});
    }
}

export function* watchUserLogout() {
    while(true) {
        yield take(USER_LOGOUT);
        yield put({ type: USER_LOGOUT })
    }
}
