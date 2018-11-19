import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import "./NewIssueWidget.scss";
import {userLoginAction, userLogoutAction} from "../../actions/auth";
import {connect} from "react-redux";
import {createNewIssueAction} from "../../actions/Issues";

export class NewIssueWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: undefined,
            type: undefined,
            body: undefined,
            errors: null
        };

        this.handleSubmitNewIssue = this.handleSubmitNewIssue.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const key = target.name;
        this.setState({
            [key]: value
        })
    }

    handleSubmitNewIssue(event) {
        event.preventDefault();
        let formIsValid = true;
        let errors = {};
        const { title, type, body } = this.state;

        /** Validate form Data */

        // Title is not empty
        if (_.isEmpty(title)) {
            formIsValid = false;
            errors["title"] = "Title cannot be empty"
        }

        // Title is alphanumeric only
        if (typeof[title] !== "undefined") {
            if (!(title).match(/^[a-z0-9]+$/i)) {
                formIsValid = false;
                errors["title"] = "Title must be alphanumeric"
            }
        }

        // type must be categorized
        if (_.isEmpty(type)) {
            formIsValid = false;
            errors['type'] = "Please select a type"
        }

        // body can be empty


        /** If no errors, shape request object and send*/
        if (_.isEmpty(errors)) {
        // ignoring typical HTML stuff headers
            const issueObject = {
                "issue-title": title,
                "issue-type": type,
                "issue-closed": false,
                "issue-log": {
                    1: {
                        "type": "post",
                        "description": body,
                        "author": "AAA",
                        "datetime": null
                        }
                }
            };
            this.props.dispatchCreateNewIssue(issueObject);
        } else {
            this.setState({errors: errors})
        }

    }
    render() {
        return (
            <div className="new-issue-widget">
                <div className="new-issue-header">
                    <input
                        name="title"
                        className="new-issue-input"
                        value={this.state.title}
                        onChange={this.handleChange}
                        required
                        autoFocus="autoFocus"
                        autoComplete="off"
                        type="text"
                        placeholder="Title"
                    />
                    <select
                        name="type"
                        value={this.state.type}
                        onChange={this.handleChange}
                        className="type-selector"
                    >
                        <option value="">None</option>
                        <option value="improvement">Improvement</option>
                        <option value="question">Question</option>
                        <option value="bug">Bug</option>
                    </select>
                </div>
                <div className="new-issue-header">
                    <textarea
                        name="body"
                        value={this.state.body}
                        onChange={this.handleChange}
                        className="new-issue-body"
                        autoComplete="off"
                        placeholder="Leave a description"
                    />
                </div>
                <button
                    className="new-issue-submit-button"
                    onClick={this.handleSubmitNewIssue}
                    disabled= {_.isEmpty(this.state.title) || _.isEmpty(this.state.type)}
                >
                    Submit New Issue
                </button>
            </div>


        )
    }
}

NewIssueWidget.propTypes = {
    onIssueSubmit: PropTypes.func.isRequired
};


const mapDispatchToProps = dispatch => ({
    dispatchCreateNewIssue: (issueObject) => {
        dispatch(createNewIssueAction(issueObject))
    },
});

export default connect(null, mapDispatchToProps)(NewIssueWidget);
