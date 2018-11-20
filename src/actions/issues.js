import {
    CREATE_NEW_ISSUE,

    LOAD_ISSUES_LIST,
    LOAD_ISSUE,

    EDIT_POST,
    CREATE_NEW_POST,

    CLOSE_ISSUE,
    OPEN_ISSUE
} from "./constants";

export const createNewIssueAction = (issueObject) => ({
    type: CREATE_NEW_ISSUE,
    payload: issueObject
});

export const loadIssuesListAction = () => ({
    type: LOAD_ISSUES_LIST,
});

export const loadIssueAction = (issueId) => ({
    type: LOAD_ISSUE,
    payload: issueId
});


export const createNewPostAction = (issueId, content) => ({
    type: CREATE_NEW_POST,
    payload: { issueId, content }
});

export const editPostAction = (issueId, postIndex, content) => ({
    type: EDIT_POST,
    payload: { issueId, postIndex, content }
});

export const closeIssueAction = (issueId) => ({
    type: CLOSE_ISSUE,
    payload: issueId
});

export const openIssueAction = (issueId) => ({
    type: OPEN_ISSUE,
    payload: issueId
})
