import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewIssueWidget extends Component {
    constructor(props) {
        super(props)

        this.handleSubmitNewIssue = this.handleSubmitNewIssue.bind(this);
    }

    handleSubmitNewIssue(event) {
        event.preventDefault();

        const { value } = this.input;

        // validate form data


    }
    render() {
        return (
            <input type="text" placeholder="Issue Title" />


        )
    }
}
