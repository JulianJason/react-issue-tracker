import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import _ from 'lodash';

import "./IssueListingWidget.scss";

export class IssueListingWidget extends Component {

    renderIssueListItems(listArray) {
        const issueListRender = [];

        listArray.forEach(object => (
                issueListRender.push(
                    <li
                        className="list-item"
                        key={object['issue-title']}
                        onClick={() => this.props.onIssueSelect(object)}
                    >
                        <p className="list-item-text">{object['issue-title']}</p>
                     </li>)
            ));

        return issueListRender;
        }

    render() {


        var issueListing = null;
        if (!_.isEmpty(this.props.allIssues)) {
            issueListing = <ul className="listing-items-container">
                {this.renderIssueListItems(this.props.allIssues)}
            </ul>
        } else {
            issueListing = <div>
                <p> No Posts Available</p>
            </div>
        }
        return (
            <div className="listing-container">
                <div className="listing-header">
                    <div className="issue-title-text">Issues</div>
                    <div className="flex">
                        <Link to="/new">
                            <button className="new-issue-button">
                                + new issue
                            </button>
                        </Link>
                    </div>
                </div>
                    <input
                        className="search-filter"
                        placeholder="Filter results"
                    />
                {issueListing}
            </div>

        )
    }
}

IssueListingWidget.propTypes = {
    allIssues: PropTypes.array,
    onIssueSelect: PropTypes.func
};
