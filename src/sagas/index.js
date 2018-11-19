import { fork, all } from 'redux-saga/effects';

import {
    watchUserLogin,
    watchUserLogout
} from "./auth";

import {
    watchCreateNewIssue,
    watchLoadIssue,
    watchLoadIssuelist
} from "./issues";

function* sagaWatcher() {
    yield all([
        // auth
        fork(watchUserLogin),
        fork(watchUserLogout),
        // issues
        fork(watchCreateNewIssue),
        fork(watchLoadIssue),
        fork(watchLoadIssuelist)
    ]);
}

export default sagaWatcher;
