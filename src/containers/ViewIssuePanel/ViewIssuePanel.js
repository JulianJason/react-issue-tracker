import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import "./ViewIssuePanel.scss";

import { ViewIssuePost } from "../../components/ViewIssuePost/ViewIssuePost";
import MockAPI from "../../services/MockAPI";
import {userLoginAction, userLogoutAction} from "../../actions/auth";
import {connect} from "react-redux";

export class ViewIssuePanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPost: null,
            isEditing: false,
            editedPost: null
        };
        this.onPostEdit = this.onPostEdit.bind(this);
    }


    // for initial load
    componentDidMount() {
        const post = MockAPI.getIssue(this.props.match.params['slug']);
        this.setState({ selectedPost: post})
    }

    // for subsequent loads
    componentWillReceiveProps(nextProps) {
        let updatedPost;
        if (nextProps.match.params.slug !== this.props.match.params.slug) {
            updatedPost = MockAPI.getIssue(nextProps.match.params['slug']);
        }

        if (nextProps.selectedIssue !== this.props.selectedIssue) {
            updatedPost = nextProps.selectedIssue;
        }
        this.setState({ selectedPost: updatedPost})
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
                                   authData={this.props.authData}
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
                {this.renderPostHeader(this.state.selectedPost)}
                <div className="view-issue-body">
                    {this.renderPostBody(this.state.selectedPost, this)}
                </div>
            </div>
        );
    }
}

ViewIssuePanel.propTypes = {
    selectedPost: PropTypes.object
};

const mapStateToProps = state => ({
    authData: state.authReducer.authData
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ViewIssuePanel);
