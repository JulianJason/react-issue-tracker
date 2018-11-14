import React, { Component } from "react";

import './Footer.scss';

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.handleRouting = this.handleRouting.bind(this)
    }

    handleRouting(route) {
        return null
    }

    render() {
        return (
            <div className="bottom-bar" >
                <div className="bottom-bar-button">
                    Create
                </div>
                <div className="bottom-bar-button">
                    Edit
                </div>
                <div className="bottom-bar-button">
                    Close
                </div>
                <div className="bottom-bar-button">
                    List
                </div>
                <div className="bottom-bar-button">
                    Reorder
                </div>
            </div>
        )
    }
}
