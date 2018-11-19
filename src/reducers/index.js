import { combineReducers } from 'redux';
import authReducer from './auth';
import issuesReducer from "./issues";

const rootReducer = combineReducers({
    authReducer,
    issuesReducer
});

export default rootReducer;
