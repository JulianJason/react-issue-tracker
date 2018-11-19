import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from 'react-grid-system'
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import _ from 'lodash';

import './Dashboard.scss';

import {
    AnalyticsPanel,
    Sidebar,
    ViewIssuePanel,
    NewIssuePanel
} from "../";

import {
    userLoginAction,
    userLogoutAction
} from "../../actions/auth";
import MockAPI from "../../services/MockAPI";


const Home = () => (
    <div className={"home"}>
        <h2> Welcome to Tiger Track </h2>
        <h2> Please login to begin</h2>
    </div>
);
class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginModalShown: false,
            allIssuesArray: null,
            selectedIssue: null
        };
    }

    componentDidMount() {
        this.putIssuesToState(MockAPI.getAllIssues());
        this.setState({allIssuesArray: MockAPI.getAllIssues().issuesList})
    }

    putIssuesToState(issuesArray) {
        this.setState({allIssuesArray: issuesArray})
    }


    onIssueSelect = (issue) => {
        this.setState({ selectedIssue: issue });
    };

    onIssueSubmit = (issue) => {
        MockAPI.createNewIssue(issue);
        this.putIssuesToState(MockAPI.getAllIssues());
    };

    onPostEdit = (issueId, postId, newContent) => {
        const selectedIssue = MockAPI.editPost(issueId, postId, newContent);
        this.setState({
            selectedIssue
        })
    };
    render() {

        return (
            <div className="body-layout-master">
                <Row className="body-layout-row">
                    <Col className="sidebar" sm={3}>
                        <Sidebar />
                    </Col>

                    <Col className="body-layout-col" sm={9}>
                        <Switch>
                            <Route path ="/" exact component={Home} />
                            <Route path="/analytics" component={AnalyticsPanel} />
                            <Route path="/new" exact component={NewIssuePanel} />
                            <Route path="/view/:slug" render={(props) => <ViewIssuePanel {...props} onPostEdit={this.onPostEdit} selectedIssue={this.state.selectedIssue}/>} />
                        </Switch>
                    </Col>
                </Row>

            </div>
        )
    }
}

Dashboard.propTypes = {
    showLoginModal: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    authData: state.authReducer.authData,
    isAuthenticating: state.authReducer.isAuthenticating
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps , mapDispatchToProps)(Dashboard);
