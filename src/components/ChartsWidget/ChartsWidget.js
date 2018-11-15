import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import "./ChartsWidget.scss";

export class ChartsWidget extends Component {


    renderTypeMap(typeMap) {
        return _.map(typeMap, function(value, key) {
            return <p className="charts-text" key={key}>{key}(s): {value}</p>
        });
    }
    render() {

        const typeMap = {};
        if (this.props.allPosts !== null) {
            console.log(JSON.stringify(this.props.allPosts,null,2));
            this.props.allPosts.forEach(function(issue) {
                typeMap[issue['issue-type']] = (typeMap['issue-type'] || 0) + 1;
                if (issue['issue-closed'] === false) typeMap['open issue'] = (typeMap['open issue'] || 0)+1;

            })
        }

        return (
            <div className="charts-container">
                {this.renderTypeMap(typeMap)}
            </div>
        )
    }
}

ChartsWidget.propTypes = {
    allPosts: PropTypes.array
};
