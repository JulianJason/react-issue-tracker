import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import _ from 'lodash';

import "./IssueListingWidget.scss";

import "./../../services/FakeBackend";

export class IssueListingWidget extends Component {

    renderIssueListItems(listArray) {
        const issueListRender = [];

        listArray.forEach(object => (
                issueListRender.push(
                    <li
                        className="list-item"
                        key={object['issue-title']}
                        onClick={() => this.props.onPostSelect(object)}
                    >
                        <p className="list-item-text">{object['issue-title']}</p>
                     </li>)
            ));

        return issueListRender;
        }

    render() {


        var issueListing = null;
        if (!_.isEmpty(this.props.allPosts)) {
            issueListing = <ul className="listing-container">
                {this.renderIssueListItems(this.props.allPosts)}
            </ul>
        } else {
            issueListing = <div>
                <p> No Posts Available</p>
            </div>
        }
        return (
            <div>
                <div>
                    <p>Issues</p>
                    <Link to="/new">
                        <button className="new-issue-button">
                            Create new issue
                        </button>
                    </Link>
                </div>
                <div>
                    <input className="search-filter" />
                </div>
                {issueListing}
            </div>

        )
    }
}

IssueListingWidget.propTypes = {
    allPosts: PropTypes.array,
    onPostSelect: PropTypes.func
};
