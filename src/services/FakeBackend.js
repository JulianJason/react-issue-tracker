import _ from 'lodash';
import getSlug from 'speakingurl';
import moment from 'moment';

const keys = [];

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj));
};

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key));
};

Storage.prototype.removeObj = function(key) {
    _.remove(keys, key);
    this.removeItem(key);
};

const postObjects = {
    1: {
        "issue-title": "Create Login Button",
        "issue-type": "improvement",
        "issue-closed": false,
        "issue-log": {
            1: {
                "type": "post",
                "description": "This issue has to be resolved ASAP",
                "author": "JulianJason",
                "datetime": "Nov 20 2018"
            },
            2: {
                "type": "activity",
                "description": "closed",
                "author": "JulianJason",
                "datetime": "Nov 20 2018"
            },
            3: {
                "type": "activity",
                "description": "closed",
                "author": "JulianJason",
                "datetime": "Nov 20 2018"
            }

        }

    },
    2: {
        "issue-title": "Implement React Router",
        "issue-type": "improvement",
        "issue-closed": false,
        "issue-log": {
            1: {
                "type": "post",
                "description": "Fast Fast",
                "author": "JulianJason",
                "datetime": "Nov 20 2018"
            },
            2: {
                "type": "activity",
                "description": "closed",
                "author": "JulianJason",
                "datetime": "Nov 20 2018"
            }

        }

    },
};

/**
 * Note:
 * Issues are the threads
 * Posts are individual comments within an issue
 *
 */


export default class FakeBackend {

    // seed local storage to contain the issues sample above
    static seedBackend() {
        localStorage.clear();
        if (localStorage.length === 0) {
            _.forEach(postObjects, function(issue) {
                FakeBackend.createNewIssue(issue);
            });
        } else {
            console.log("Backend is not empty")
        }
    }

    /** Getter functions */
    // fetches all posts from local storage
    static getAllIssues() {
        let allPosts = [];
        keys.forEach(function(key) {
            const issue = localStorage.getObj(key);
            allPosts.push(issue);
        });
        return allPosts
    }

    // get a specific post from the back end
    static getPost(slug) {
        const key = getSlug(slug);
        const obj = localStorage.getObj(key);
        // console.log("Fetched " + JSON.stringify(obj, null, 2))
        return obj
    }


    /** Filter functions */
    static filterIssuesByType(type) {
        let allPosts = this.getAllIssues();

        return _.filter(allPosts, function(issue) {
            return issue['issue-type'] === type
        })
    }

    // filters the post according to the type
    static filterIssuesByName(searchString) {
        let allPosts = this.getAllIssues();

        return _.filter(allPosts, function(issue) {
            return _.includes(issue['issue-title'], searchString)
        })
    }

    /** Create functions */
    static createNewIssue(issueObject) {

        // append datetime on server side
        const updatedObject = _.set(issueObject, 'issue-log.1.datetime', moment.now());

        // get the issue Id aka the slug
        const key = getSlug(issueObject['issue-title']);
        keys.push(key);
        localStorage.setObj(key, updatedObject);
        // console.log("Created new issue")
    }

    // Appends a post to an issue
    static commentOnIssue(issueId, commentObject) {
        const beforeObject = JSON.parse( localStorage.getObj(issueId));
        const updatedObject = { ...beforeObject, commentObject};

        localStorage.setObj(issueId, updatedObject);
    }


    /** Edit functions */
    static editPost(issueTitle, postIndex, newContent) {
        const beforeObject = this.getPost(issueTitle);
        console.log("before " + JSON.stringify(beforeObject, null, 2));
        console.log("New content is " + JSON.stringify(newContent));
        const updatedObject = _.set(beforeObject, ["issue-log", postIndex, "description"], newContent);

        console.log("after " + JSON.stringify(updatedObject, null, 2));

        localStorage.setObj(issueTitle, updatedObject);
        return updatedObject;
    }

    static closeIssue(issueId) {
        const beforeObject = JSON.parse(localStorage.getObj(issueId));
        const updatedObject = _.update(beforeObject, "issue-closed", true);

        localStorage.setObj(issueId, updatedObject);
    }

    static openIssue(issueId) {
        const beforeObject = JSON.parse(localStorage.getObj(issueId));
        const updatedObject = _.update(beforeObject, "issue-closed", false);

        localStorage.setObj(issueId, updatedObject);
    }
}
