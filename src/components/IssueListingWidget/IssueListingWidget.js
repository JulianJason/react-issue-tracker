import React, { Component } from "react";
import PropTypes from "prop-types";

import "./IssueListingWidget.scss";

import "./../../services/FakeBackend";

export class IssueListingWidget extends Component {

    renderIssueListItems(listArray) {
        const issueListRender = [];

        listArray.forEach(object => (
                issueListRender.push(<div className="list-item" key={object['issue-title']}>
                    <p className="list-item-text">{object['issue-title']}</p>
                </div>)
            ));

        return issueListRender;
        }

    render() {


        var issueListing = null;
        if (this.props.allPosts.length > 0) {
            issueListing = <div className="listing-container">
                {this.renderIssueListItems(this.props.allPosts)}
            </div>
        } else {
            issueListing = <div>
                <p> No Posts Available</p>
            </div>
        }
        return (
            <div>
                {issueListing}
            </div>

        )
    }
}

IssueListingWidget.propTypes = {
    allPosts: PropTypes.array
};
