import {
    CREATE_NEW_ISSUE,
    LOAD_ISSUES_LIST,
    LOAD_ISSUE
} from "./constants";

export const createNewIssueAction = (issueObject) => (
    {
        type: CREATE_NEW_ISSUE,
        payload: issueObject
    }
);

export const loadIssuesListAction = () => (
    {
        type: LOAD_ISSUES_LIST,
    }
);

export const loadIssueAction = (issueId) => (
    {
        type: LOAD_ISSUE,
        payload: issueId
    }
)
