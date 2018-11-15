import _ from 'lodash';

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
        "issue-type": "Improvement",
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
        "issue-type": "Improvement",
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


export default class FakeBackend {
    static seedBackend() {
        localStorage.clear();
        if (localStorage.length === 0) {
            _.forEach(postObjects, function(issue) {
                FakeBackend.createNewIssue(issue);
            })

        } else {
            console.log("Backend is not empty")
        }
    }

    static getAllPosts() {
        var allPosts = [];
        keys.forEach(function(key) {
            const issue = localStorage.getObj(key);
            allPosts.push(issue);
        });
        return allPosts
    }

    static createNewIssue(issueObject) {
        const key = issueObject['issue-title'];
        keys.push(key);
        localStorage.setObj(key, issueObject)
    }


    static commentOnIssue(issueId, commentObject) {
        const beforeObject = JSON.parse( localStorage.getObj(issueId));
        const updatedObject = { ...beforeObject, commentObject};

        localStorage.setObj(issueId, updatedObject);
    }



    static getPost(postId) {
        return JSON.parse( localStorage.getObj(postId))
    }
}
