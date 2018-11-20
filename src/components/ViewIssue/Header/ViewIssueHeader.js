import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import "./ViewIssueHeader.scss";

class ViewIssueHeader extends Component {

    render() {
        return (
            <div className="view-issue-header">
                <div>
                    <div className="view-issue-header-title">{this.props.title}</div>
                </div>
                <div>
                    <div className="view-issue-header-type">- {_.startCase(this.props.type)}</div>
                    {this.props.isOpen ? <div className="">Open</div> : <div className="">Closed</div>}

                </div>
            </div>
        )
    }
}

ViewIssueHeader.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired
};

export default ViewIssueHeader;
