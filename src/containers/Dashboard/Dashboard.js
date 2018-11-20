import React, { Component } from "react";
import { Row, Col } from 'react-grid-system'
import { Switch, Route } from "react-router-dom";

import './Dashboard.scss';

import {
    AnalyticsPanel,
    Sidebar,
    ViewIssuePanel,
    NewIssuePanel
} from "../";



const Home = () => (
    <div className={"home"}>
        <h2> Welcome to Tiger Track </h2>
        <h2> Please login to begin</h2>
    </div>
);
class Dashboard extends Component {
    render() {

        return (
            <div className="body-layout-master">
                <Row className="body-layout-row">
                    <Col className="sidebar-container" sm={3}>
                        <Sidebar />
                    </Col>

                    <Col className="body-layout-col" sm={9}>
                        <Switch>
                            <Route path ="/" exact component={Home} />
                            <Route path="/analytics" exact component={AnalyticsPanel} />
                            <Route path="/new" exact component={NewIssuePanel} />
                            <Route path="/view/:slug" component={ViewIssuePanel}/>} />
                        </Switch>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Dashboard;
