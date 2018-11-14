import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ViewIssueWidget.scss";

import { Post } from "./Post/Post";

export class ViewIssueWidget extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const sampleListing1 = {
            "issue-title": "Create Login Button",
            "issue-type": "Improvement",
            "issue-description": "This issue has to be resolved ASAP",
            "author": "JulianJason",
            "datetime": "Nov 20 2018"
        };


        return (
            <div>
                <Post author={sampleListing1['author']} description={sampleListing1['issue-description']} datetime={sampleListing1['datetime']} />
                <Post author={sampleListing1['author']} description={sampleListing1['issue-description']} datetime={sampleListing1['datetime']} />
            </div>
        )
    }
}

ViewIssueWidget.PropTypes = {

};
