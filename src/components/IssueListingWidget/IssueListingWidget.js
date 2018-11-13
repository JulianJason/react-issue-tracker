import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';
export class IssueListingWidget extends Component {
    constructor(props) {
        super(props)
    }



    renderIssueListItems(listObject) {
        console.log("Trying to render")
        const issueListArray = [];
        listObject.forEach(object => (
                issueListArray.push(<div className="list-item" key={object['issue-title']}>
                    <h4>{object['issue-title']}</h4>
                </div>)
            ))

        return issueListArray;
        }

    render() {


        const sampleListing1 = {
            "issue-title": "This is a sample listing 1",
            "issue-type": "Bug",
            "issue-description": "This issue has to be resolved ASAP",
        };


        const sampleListing2 = {
            "issue-title": "This is a sample listing 2",
            "issue-type": "Improvement",
            "issue-description": "This issue has to be resolved ASAP",
        };


        const sampleListing3 = {
            "issue-title": "This is a sample listing 3",
            "issue-type": "Question",
            "issue-description": "This issue has to be resolved ASAP",
        };

        const samplePayload = [];
        samplePayload.push(sampleListing1);
        samplePayload.push(sampleListing2);
        samplePayload.push(sampleListing3);

        return (
            <div className="listing-container">
                <h2>test</h2>
                {this.renderIssueListItems(samplePayload)}
            </div>
        )
    }
}
