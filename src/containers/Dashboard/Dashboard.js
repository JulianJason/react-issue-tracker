import React, { Component } from "react";
import _ from 'lodash';

import './Dashboard.scss';

import { Row, Col } from 'react-grid-system'
import { ChartsWidget, IssueListingWidget, ViewIssueWidget } from "../../components/index.js";
import {LoginModal} from "../../components";
import FakeBackend from "../../services/FakeBackend";

export class Dashboard extends Component {
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
        const issuePayloadArray = FakeBackend.getAllPosts();
        return (
            <div className="body-layout-master">
                <Row className="body-layout-row">
                    <Col className="body-layout-col" sm={3}>
                        <ChartsWidget allPosts={issuePayloadArray}/>

                        <div className="separator"/>

                        <IssueListingWidget allPosts={issuePayloadArray} />

                    </Col>

                    <Col className="body-layout-col" sm={9}>
                        <ViewIssueWidget selectedPost={_.sample(issuePayloadArray)}/>
                    </Col>
                </Row>

                {this.state.isLoginModalShown ? <LoginModal loginUser={null} logoutUser={null} /> : null}
            </div>
        )

    }
}
