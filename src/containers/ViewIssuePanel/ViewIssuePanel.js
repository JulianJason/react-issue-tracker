import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import "./ViewIssuePanel.scss";

import { ViewIssuePost } from "../../components/ViewIssuePost/ViewIssuePost";
import MockAPI from "../../services/MockAPI";
import {userLoginAction, userLogoutAction} from "../../actions/auth";
import {connect} from "react-redux";

class ViewIssuePanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPost: null,
            isEditing: false,
            editedPost: null
        };
        this.onPostEdit = this.onPostEdit.bind(this);
    }

    renderPostHeader(post) {
        if (!_.isEmpty(post)) {

            return (
                <div className="view-issue-header">
                    <div>
                        <p className="view-issue-header-title">{post['issue-title']}</p>
                        <p className="view-issue-header-type">- {_.startCase(post['issue-type'])}</p>
                    </div>
                    <div>
                        <div className="">Open</div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    onPostEdit(index, content) {
        this.props.onPostEdit(this.state.selectedPost['issue-title'], index, content);
    }

    renderPostBody(post, self) {
        const postArrayRender = [];

        // render each post comment
        if (!_.isEmpty(post)) {
            _.forEach(post['issue-log'], function (postLog, key) {
                postArrayRender.push(
                    <ViewIssuePost key={key}
                                   author={postLog['author']}
                                   description={postLog['description']}
                                   datetime={postLog['datetime']}
                                   authData={self.props.authData}
                                   onPostEdit={self.onPostEdit}
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

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewIssuePanel);
