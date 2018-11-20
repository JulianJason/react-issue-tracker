import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'
import _ from 'lodash';

import "./ViewIssuePanel.scss";

import {
    ViewIssueHeader,
    ViewIssuePost,
    ViewIssueFooter
} from "../../components/";

import {
    createNewPostAction,
    editPostAction,
    closeIssueAction,
    openIssueAction
} from "../../actions/issues";
import {connect} from "react-redux";

class ViewIssuePanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPost: null,
            isEditing: false,
            editedPost: null
        };
        this.handlePostCreate = this.handlePostCreate.bind(this);
        this.handlePostEdit = this.handlePostEdit.bind(this);
        this.handleIssueClose = this.handleIssueClose.bind(this);
        this.handleIssueOpen = this.handleIssueOpen.bind(this);
    }

    handlePostCreate(postIndex, content) {
        this.props.dispatchCreateNewPost(this.props.selectedIssue['issue-title'], content);
    }

    handlePostEdit(index, content) {
        this.props.dispatchEditPost(this.state.selectedPost['issue-title'], index, content);
    }
    handleIssueClose() {
        this.props.dispatchCloseIssue(this.state.selectedPost['issue-title']);
    }
    handleIssueOpen() {
        this.props.dispatchOpenIssue(this.state.selectedPost['issue-title']);

    }
    // post header is the title, type and tags
    renderPostHeader(post) {
        if (!_.isEmpty(post)) {

            return (
                <ViewIssueHeader
                    title={post['issue-title']}
                    type={post['issue-type']}
                    isOpen={!post['issue-closed']}
                />
            )
        } else {
            return null
        }
    }
    // post body is all the comments including the initial post
    renderPostBody(post, self) {
        const postArrayRender = [];

        // render each post comment
        if (!_.isEmpty(post)) {
            _.forEach(post['issue-log'], function (postLog, key) {
                postArrayRender.push(
                    <ViewIssuePost
                        key={key}
                        author={postLog['author']}
                        description={postLog['description']}
                        datetime={postLog['datetime']}
                        authData={self.props.authData}
                        onPostEdit={self.handlePostEdit}
                        postIndex={key}
                    />
                )
            })
        } else {
            postArrayRender.push(
                <p key={'no-post'}>Invalid issue</p>
            )
        }

        return postArrayRender;
    }


    render() {
        return (
            <div className="view-issue-container">
                {this.renderPostHeader(this.props.selectedIssue)}
                <div className="view-issue-body">
                    {this.renderPostBody(this.props.selectedIssue, this)}
                </div>
                <ViewIssueFooter authData={this.props.authData}/>
            </div>
        );
    }
}

ViewIssuePanel.propTypes = {
    selectedPost: PropTypes.object
};

const mapStateToProps = state => ({
    authData: state.authReducer.authData,
    selectedIssue: state.issuesReducer.selectedIssue
});

const mapDispatchToProps = dispatch => ({
    dispatchCreateNewPost: (issueId, content) => {
        dispatch(createNewPostAction(issueId, content))
    },
    dispatchEditPost: (issueId, postIndex, content) => {
        dispatch(editPostAction(issueId, postIndex, content))
    },
    dispatchCloseIssue: (issueId) => {
        dispatch(closeIssueAction(issueId))
    },
    dispatchOpenIssue: (issueId) => {
        dispatch(openIssueAction(issueId))
    }

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewIssuePanel));
