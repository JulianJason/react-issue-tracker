import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ChartsWidget.scss";

export class ChartsWidget extends Component {

    render() {
        return (
            <div className="charts-container">

                <p className="charts-text">Total Issues</p>
                <p className="charts-text">Issues need priority</p>
                <p className="charts-text">Analytics </p>
                <p className="charts-text">Help</p>
            </div>
        )
    }
}

ChartsWidget.PropTypes = {

};
