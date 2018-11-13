import React, { Component } from "react";
import PropTypes from "prop-types";

export class ChartsWidget extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p> Total Issues</p>
                <p> Issues need priority</p>
                <p> Analytics </p>
                <p> Help</p>
            </div>
        )
    }
}
