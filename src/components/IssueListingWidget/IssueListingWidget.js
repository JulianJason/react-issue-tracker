import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import _ from 'lodash';
import getSlug from 'speakingurl';

import "./IssueListingWidget.scss";
import {loadIssuesListAction} from "../../actions/issues";

export class IssueListingWidget extends Component {

    renderIssueListItems(listArray) {
        const issueListRender = [];

        listArray.forEach(object => (
                issueListRender.push(
                    <li
                        className="list-item"
                        key={object['issue-title']}
                        onClick={() => this.props.onIssueSelect(object['issue-title'])}
                    >
                        <Link to={"/view/" + getSlug(object['issue-title'])}>
                            <p className="list-item-text">{object['issue-title']}</p>
                        </Link>
                     </li>)
            ));

        return issueListRender;
        }

    render() {


        var issueListing = null;
        if (!_.isEmpty(this.props.issuesList)) {
            issueListing = <ul className="listing-items-container">
                {this.renderIssueListItems(this.props.issuesList)}
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
                    {!_.isEmpty(this.props.authData.username) ?
                        <div className="flex">
                            <Link to="/new">
                                <button className="new-issue-button">
                                    + new issue
                                </button>
                            </Link>
                        </div> : null }
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
    issuesList: PropTypes.array,
    onIssueSelect: PropTypes.func
};

const mapStateToProps = state => ({
    issuesList: state.issuesReducer.issuesList
});

const mapDispatchToProps = dispatch => ({
    dispatchLoadIssuesList: () => {
        dispatch(loadIssuesListAction())
    }
});

export default (IssueListingWidget);
