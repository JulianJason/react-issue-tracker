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

const issuesInitialState = {
    isFetching: false,
    isFetchingFailed: false,
    isFetchingList: false,
    isFetchingListFailed: false,
    isRegistering: false,
    isRegisteringFailed: false,
    issuesList: {},
    selectedIssue: null

};

function issuesReducer(state = issuesInitialState, action) {
    switch(action.type) {
        case CREATE_NEW_ISSUE:
            return {
                ...state,
                isRegistering: true,
            };
        case CREATE_NEW_ISSUE_SUCCESS:
            return {
                ...state,
                isRegistering: false,
            };
        case CREATE_NEW_ISSUE_FAILED:
            return {
                ...state,
                isRegistering: false,
                isRegisteringFailed: true,
                errorMessage: action.response.errorMessage
            };
        case LOAD_ISSUES_LIST:
            return {
                ...state,
                isFetchingList: true,
                issuesList: action.issuesList
            };
        case LOAD_ISSUES_LIST_SUCCESS:
            return {
                ...state,
                isFetchingList: false,
                issuesList: action.response.issuesList
            };
        case LOAD_ISSUES_LIST_FAILED:
            return {
                ...state,
                isFetchingList: false,
                errorMessage: action.response.errorMessage
            };
        case LOAD_ISSUE:
            return {
                ...state,
                isFetching: true
            };
        case LOAD_ISSUE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                selectedIssue: action.response.selectedIssue
            };
        case LOAD_ISSUE_FAILED:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.response.errorMessage
            };
        default:
            return state;
    }
}

export default issuesReducer;
