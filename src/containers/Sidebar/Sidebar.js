import React, { Component } from "react";
import { connect } from 'react-redux';

import './Sidebar.scss';

import {
    OverviewWidget,
    IssueListingWidget,
} from "../../components/index.js";

import {
    loadIssuesListAction,
    loadIssueAction
} from "../../actions/issues";



class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginModalShown: false,
            allIssuesArray: null,
            selectedIssue: null
        };
    }

    componentDidMount() {
        this.props.dispatchLoadIssuesList();
    }
    render() {

        return (
            <div className="body-layout-master">
                <OverviewWidget issuesList={this.props.issuesList}/>
                <div className="separator"/>
                <IssueListingWidget
                    issuesList={this.props.issuesList}
                    authData={this.props.authData}
                    onIssueSelect={this.props.dispatchLoadIssue}
                />
            </div>
        )
    }
}

Sidebar.propTypes = {
};


const mapStateToProps = state => ({
    issuesList: state.issuesReducer.issuesList,
    authData: state.authReducer.authData
});

const mapDispatchToProps = dispatch => ({
    dispatchLoadIssuesList: () => {
        dispatch(loadIssuesListAction())
    },

    dispatchLoadIssue: (issueId) => {
        dispatch(loadIssueAction(issueId))
    }
});

export default connect(mapStateToProps , mapDispatchToProps)(Sidebar);
