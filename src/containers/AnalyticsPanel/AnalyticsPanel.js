import React, { Component } from "react";

import './AnalyticsPanel.scss';

export default class AnalyticsPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginModalShown: false
        };
    }

    showLoginModal = () => {
        this.setState({ isLoginModalShown: true });
    };

    hideLoginModal = () => {
        this.setState({ isLoginModalShown: true });
    };


    render() {
        return (
            <div className="body-layout-master">
            </div>
        )

    }
}
