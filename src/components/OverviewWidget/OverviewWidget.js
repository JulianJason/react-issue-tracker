import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import "./OverviewWidget.scss";

class OverviewWidget extends Component {


    renderTypeMap(typeMap) {
        return _.map(typeMap, function(value, key) {
            return <p className="charts-text" key={key}>{_.startCase(key)}: {value}</p>
        });
    }

    render() {
        const typeMap = {
            "bug": 0,
            "improvement": 0,
            "question": 0
        };
        if (this.props.issuesList !== null) {
            _.forEach(this.props.issuesList, function(issue) {
                typeMap[issue['issue-type']] = (typeMap[issue['issue-type']] || 0) + 1;
                if (issue['issue-closed'] === false) typeMap['Open'] = (typeMap['Open'] || 0)+1;

            })
        }

        return (
            <div className="charts-container">
                <div className={"overview-text"}>
                    Overview
                </div>
                {this.renderTypeMap(typeMap)}
            </div>
        )
    }
}

OverviewWidget.propTypes = {
    issuesList: PropTypes.arrayOf(PropTypes.shape({
        'issue-type': PropTypes.string,
        'issue-closed': PropTypes.bool
    })),
};

export default OverviewWidget;
