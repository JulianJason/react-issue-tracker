import React, { Component } from "react";

import styles from './Dashboard.scss';

import { Container, Row, Col } from 'react-grid-system'
import { ChartsWidget, IssueListingWidget, ViewIssueWidget } from "../../components/index.js";
import {LoginModal} from "../../components";

export class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginModalShown: true
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
                        <ChartsWidget></ChartsWidget>

                        <div className="separator"/>

                        <IssueListingWidget></IssueListingWidget>

                    </Col>

                    <Col className="body-layout-col" sm={9}>
                        <ViewIssueWidget/>
                    </Col>
                </Row>


                <LoginModal loginUser={null} logoutUser={null}/>
            </div>
        )

    }
}