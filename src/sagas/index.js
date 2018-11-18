import { fork, all } from 'redux-saga/effects';

import {
    watchUserLogin
} from "./auth";

function* sagaWatcher() {
    yield all([
        fork(watchUserLogin)
    ]);
}

export default sagaWatcher;
