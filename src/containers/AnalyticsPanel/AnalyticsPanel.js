import React, { Component } from "react";

import './AnalyticsPanel.scss';

import { Row, Col } from 'react-grid-system'
import { ViewIssueWidget } from "../../components/index.js";
import {LoginModal} from "../../components";

export class AnalyticsPanel extends Component {
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
                <ViewIssueWidget/>

                {this.state.isLoginModalShown ? <LoginModal loginUser={null} logoutUser={null} /> : null}
            </div>
        )

    }
}
