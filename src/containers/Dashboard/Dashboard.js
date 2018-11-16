import React, { Component } from "react";
import _ from 'lodash';
import { Switch, Route } from "react-router-dom";

import './Dashboard.scss';

import { Row, Col } from 'react-grid-system'
import {
    ChartsWidget,
    IssueListingWidget,
    ViewIssueWidget,
    LoginModal,
    NewIssueWidget
} from "../../components/index.js";

import FakeBackend from "../../services/FakeBackend";
import {AnalyticsPanel} from "../AnalyticsPanel/AnalyticsPanel";

const Home = () => (
    <div>
        <h2> Home </h2>
    </div>
);
export class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginModalShown: false,
            allIssuesArray: null,
            selectedIssues: null
        };
    }

    componentDidMount() {
        this.putIssuesToState(FakeBackend.getAllPosts());
    }

    putIssuesToState(issuesArray) {
        this.setState({allIssuesArray: issuesArray})
    }
    showLoginModal = () => {
        this.setState({ isLoginModalShown: true });
    };

    hideLoginModal = () => {
        this.setState({ isLoginModalShown: true });
    };

    onIssueSelect = (issue) => {
        this.setState({ selectedIssues: issue });
    };

    onIssueSubmit = (issue) => {
        FakeBackend.createNewIssue(issue);
        this.putIssuesToState(FakeBackend.getAllPosts());
    };

    render() {

        return (
            <div className="body-layout-master">
                <Row className="body-layout-row">
                    <Col className="sidebar" sm={3}>
                        <ChartsWidget allPosts={this.state.allIssuesArray}/>
                        <div className="separator"/>
                        <IssueListingWidget allPosts={this.state.allIssuesArray} onIssueSelect={this.onIssueSelect}/>

                    </Col>

                    <Col className="body-layout-col" sm={9}>
                        <Switch>
                            <Route path ="/" exact component={Home} />
                            <Route path="/analytics" component={AnalyticsPanel} />
                            <Route path="/view" component={ViewIssueWidget} />
                            <Route path="/new" render={() => <NewIssueWidget onIssueSubmit={this.onIssueSubmit} />}/>
                        </Switch>
                    </Col>
                </Row>

                {this.state.isLoginModalShown ? <LoginModal loginUser={null} logoutUser={null} /> : null}
            </div>
        )

    }
}
