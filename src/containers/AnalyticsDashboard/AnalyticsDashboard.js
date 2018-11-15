import React, { Component } from "react";

import './AnalyticsDashboard.scss';

import { Row, Col } from 'react-grid-system'
import { ViewIssueWidget } from "../../components/index.js";
import {LoginModal} from "../../components";

export class AnalyticsDashboard extends Component {
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
                <Row className="body-layout-row">
                    <Col className="body-layout-col" sm={3}>
                        <p> This is now analytics </p>

                        <div className="separator"/>

                        <p> This is now analytics </p>

                    </Col>

                    <Col className="body-layout-col" sm={9}>
                        <ViewIssueWidget/>
                    </Col>
                </Row>

                {this.state.isLoginModalShown ? <LoginModal loginUser={null} logoutUser={null} /> : null}
            </div>
        )

    }
}
