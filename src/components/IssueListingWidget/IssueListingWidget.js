import React, { Component } from "react";
import PropTypes from "prop-types";

import "./IssueListingWidget.scss";

export class IssueListingWidget extends Component {
    constructor(props) {
        super(props)
    }



    renderIssueListItems(listObject) {
        console.log("Trying to render")
        const issueListArray = [];
        listObject.forEach(object => (
                issueListArray.push(<div className="list-item" key={object['issue-title']}>
                    <p className="list-item-text">{object['issue-title']}</p>
                </div>)
            ));

        return issueListArray;
        }

    render() {


        const sampleListing1 = {
            "issue-title": "Create Login Button",
            "issue-type": "Improvement",
            "issue-description": "This issue has to be resolved ASAP",
        };


        const sampleListing2 = {
            "issue-title": "Implement Redux",
            "issue-type": "Improvement",
            "issue-description": "This issue has to be resolved ASAP",
        };


        const sampleListing3 = {
            "issue-title": "Add animation to login modal",
            "issue-type": "Bug",
            "issue-description": "This issue has to be resolved ASAP",
        };

        const samplePayload = [];
        samplePayload.push(sampleListing1);
        samplePayload.push(sampleListing2);
        samplePayload.push(sampleListing3);

        return (
            <div className="listing-container">
                {this.renderIssueListItems(samplePayload)}
            </div>
        )
    }
}
