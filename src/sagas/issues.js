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
    LOAD_ISSUE_FAILED,
    CREATE_NEW_POST_SUCCESS,
    CREATE_NEW_POST,
    CREATE_NEW_POST_FAILED,
    EDIT_POST,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAILED, CLOSE_ISSUE, OPEN_ISSUE
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


/** CREATE A NEW COMMENT/POST */
export function* watchCreateNewPost() {
    while(true) {
        const { payload } = yield take(CREATE_NEW_POST);
        yield call(createNewPostSaga, payload);
    }
}


function* createNewPostSaga(payload) {
    try {
        const response = yield call(MockAPI.postOnIssue, payload);
        if (response.error === false) {
            yield put({ type: CREATE_NEW_POST_SUCCESS, response });
        } else {
            yield put({type: CREATE_NEW_POST_FAILED, response});
        }
    } catch (error) {
        yield put({ type: CREATE_NEW_POST_FAILED, response: { errorMessage: error }});
    }
}


/** EDIT COMMENT/POST */
export function* watchEditPost() {
    while(true) {
        const { payload } = yield take(EDIT_POST);
        yield call(editPostSaga, payload);
    }
}


function* editPostSaga(payload) {
    try {
        const response = yield call(MockAPI.editPost, payload);
        if (response.error === false) {
            yield put({ type: EDIT_POST_SUCCESS, response });
        } else {
            yield put({type: EDIT_POST_FAILED, response});
        }
    } catch (error) {
        yield put({ type: EDIT_POST_FAILED, response: { errorMessage: error }});
    }
}



/** CLOSE ISSUE*/
export function* watchCloseIssue() {
    while(true) {
        const { payload } = yield take(CLOSE_ISSUE);
        yield call(closeIssueSaga, payload);
    }
}


function* closeIssueSaga(payload) {
    try {
        yield call(MockAPI.closeIssue, payload);
    } catch (error) {

    }
}



/** REOPEN ISSUE */
export function* watchOpenIssue() {
    while(true) {
        const { payload } = yield take(OPEN_ISSUE);
        yield call(openIssueSaga, payload);
    }
}


function* openIssueSaga(payload) {
    try {
        yield call(MockAPI.openIssue, payload);
    } catch (error) {

    }
}
