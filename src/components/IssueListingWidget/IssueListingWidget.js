import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import _ from 'lodash';
import getSlug from 'speakingurl';

import "./IssueListingWidget.scss";

export class IssueListingWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: '',
            filteredList: null
        };

        this.filterIssuesList = this.filterIssuesList.bind(this);
    }

    filterIssuesList(event) {
        const filerValue = event.target.value;
        // update controlled component
        this.setState({
            filter: filerValue
        });

        if (!_.isEmpty(event.target.value)) {
            const filteredList = _.filter(this.props.issuesList, function(issue) {
                return _.toUpper(issue['issue-title']).includes(_.toUpper(filerValue))
            });

            this.setState({
                isFiltering: true,
                filteredList: filteredList
            })
        } else {

            this.setState({
                isFiltering: false,
                filteredList: null
            })
        }


    }

    renderIssueListItems(listArray) {
        const issueListRender = [];

        let listToUse = null;
        // if is filtering
        if (this.state.isFiltering) {
            listToUse = this.state.filteredList
        } else {
            listToUse = listArray;
        }

        listToUse.forEach(object => (
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
        let issueListing = null;

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
                        value={this.state.filter}
                        onChange={(event) => this.filterIssuesList(event)}

                    />
                {issueListing}
            </div>

        )
    }
}

IssueListingWidget.propTypes = {
    issuesList: PropTypes.arrayOf(PropTypes.shape({
        'issue-type': PropTypes.string,
        'issue-closed': PropTypes.bool
    })),
    onIssueSelect: PropTypes.func
};


export default IssueListingWidget;
