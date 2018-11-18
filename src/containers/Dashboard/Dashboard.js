import React, { Component } from "react";
import _ from 'lodash';
import { Switch, Route } from "react-router-dom";

import './Dashboard.scss';

import { Row, Col } from 'react-grid-system'
import {
    OverviewWidget,
    IssueListingWidget,
    ViewIssuePanel,
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
            selectedIssue: null
        };
    }

    componentDidMount() {
        this.putIssuesToState(FakeBackend.getAllIssues());
        this.setState({allIssuesArray: FakeBackend.getAllIssues()})
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
        this.setState({ selectedIssue: issue });
    };

    onIssueSubmit = (issue) => {
        FakeBackend.createNewIssue(issue);
        this.putIssuesToState(FakeBackend.getAllIssues());
    };

    onPostEdit = (issueId, postId, newContent) => {
        const selectedIssue = FakeBackend.editPost(issueId, postId, newContent);
        this.setState({
            selectedIssue
        })
    };
    render() {

        return (
            <div className="body-layout-master">
                <Row className="body-layout-row">
                    <Col className="sidebar" sm={3}>
                        <OverviewWidget allIssues={this.state.allIssuesArray}/>
                        <div className="separator"/>
                        <IssueListingWidget allIssues={this.state.allIssuesArray} onIssueSelect={this.onIssueSelect}/>

                    </Col>

                    <Col className="body-layout-col" sm={9}>
                        <Switch>
                            <Route path ="/" exact component={Home} />
                            <Route path="/analytics" component={AnalyticsPanel} />
                            <Route path="/view/:slug" render={(props) => <ViewIssuePanel {...props} onPostEdit={this.onPostEdit} selectedIssue={this.state.selectedIssue}/>} />
                            <Route path="/new" render={() => <NewIssueWidget onIssueSubmit={this.onIssueSubmit} />}/>
                        </Switch>
                    </Col>
                </Row>

                {this.state.isLoginModalShown ? <LoginModal loginUser={null} logoutUser={null} /> : null}
            </div>
        )

    }
}
