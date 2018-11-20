/*
 * The constants here define the actions that are broadcasted for the watcher processes to pick.
 */


// User login screen - header button
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

// Clear authentication
export const USER_LOGOUT = 'USER_LOGOUT';

// Create new issue
export const CREATE_NEW_ISSUE = 'CREATE_NEW_ISSUE';
export const CREATE_NEW_ISSUE_SUCCESS = 'CREATE_NEW_ISSUE_SUCCESS';
export const CREATE_NEW_ISSUE_FAILED = 'CREATE_NEW_ISSUE_FAILED';


// list all issues
export const LOAD_ISSUES_LIST = 'LOAD_ISSUES_LIST';
export const LOAD_ISSUES_LIST_SUCCESS = 'LOAD_ISSUES_LIST_SUCCESS';
export const LOAD_ISSUES_LIST_FAILED = 'LOAD_ISSUES_LIST_FAILED';

// get a single issue
export const LOAD_ISSUE = 'LOAD_ISSUE';
export const LOAD_ISSUE_SUCCESS = 'LOAD_ISSUE_SUCCESS';
export const LOAD_ISSUE_FAILED = 'LOAD_ISSUE_FAILED';

// submit a new post/comment
export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const CREATE_NEW_POST_SUCCESS = 'CREATE_NEW_POST_SUCCESS';
export const CREATE_NEW_POST_FAILED = 'CREATE_NEW_POST_FAILED';

// edit existing posts
export const EDIT_POST = 'EDIT_POST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILED = 'EDIT_POST_FAILED';

export const CLOSE_ISSUE = 'CLOSE_ISSUE';
export const OPEN_ISSUE = 'OPEN_ISSUE';
