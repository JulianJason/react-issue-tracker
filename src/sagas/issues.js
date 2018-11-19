import { take, put, call, fork } from 'redux-saga/effects';
import MockAPI from "../services/MockAPI";

import {
    CREATE_NEW_ISSUE,
    CREATE_NEW_ISSUE_SUCCESS,
    CREATE_NEW_ISSUE_FAILED,

    LOAD_ISSUES_LIST,
    LOAD_ISSUES_LIST_SUCCESS,
    LOAD_ISSUES_LIST_FAILED,

    LOAD_ISSUE,
    LOAD_ISSUE_SUCCESS,
    LOAD_ISSUE_FAILED
} from "../actions/constants";

/** CREATE NEW ISSUE */
export function* watchCreateNewIssue() {
    while(true) {
        const { payload } = yield take(CREATE_NEW_ISSUE);
        yield call(createNewIssueSaga, payload);
    }
}

function* createNewIssueSaga(payload) {
    try {
        const response = yield call(MockAPI.createNewIssue, payload);
        if (response.error === false) {
            yield put({ type: CREATE_NEW_ISSUE_SUCCESS, response });

            // trigger reload on listing and sidebar
            yield fork(loadIssueListSaga);
        } else {
            yield put({type: CREATE_NEW_ISSUE_FAILED, response});
        }
    } catch (error) {
        yield put({ type: CREATE_NEW_ISSUE_FAILED, response: { errorMessage: error }});
    }
}

/** LOAD ISSUE LIST */
export function* watchLoadIssuelist() {
    while(true) {
        yield take(LOAD_ISSUES_LIST);
        yield call(loadIssueListSaga);
    }
}

function* loadIssueListSaga() {
    try {
        const response = yield call(MockAPI.getAllIssues);
        if (response.error === false) {
            yield put({ type: LOAD_ISSUES_LIST_SUCCESS, response });
        } else {
            yield put({type: LOAD_ISSUES_LIST_FAILED, response});
        }
    } catch (error) {
        yield put({ type: LOAD_ISSUES_LIST_FAILED, response: { errorMessage: error }});
    }
}

/** LOAD ISSUE */
export function* watchLoadIssue() {
    while(true) {
        const { payload } = yield take(LOAD_ISSUE);
        yield call(loadIssueSaga, payload);

    }
}

function* loadIssueSaga(payload) {
    try {
        const response = yield call(MockAPI.getIssue, payload);
        if (response.error === false) {
            yield put({ type: LOAD_ISSUE_SUCCESS, response });
        } else {
            yield put({type: LOAD_ISSUE_FAILED, response});
        }
    } catch (error) {
        yield put({ type: LOAD_ISSUE_FAILED, response: { errorMessage: error }});
    }
}
