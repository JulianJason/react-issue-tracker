import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import "./ViewIssueWidget.scss";

import { Post } from "./Post/Post";

export class ViewIssueWidget extends Component {


    renderPostHeader(post) {
        if (!_.isEmpty(post)) {

            return (
                <div className="post-header">
                    <p>{post['issue-title']}</p>
                    <p>{post['issue-type']}</p>
                </div>
            )
        } else {
            return null
        }
    }

    renderPostBody(post) {
        const postArrayRender = [];

        // render each post comment
        if (!_.isEmpty(post)) {
            _.forEach(post['issue-log'], function (postLog, key) {
                postArrayRender.push(
                    <Post key={key} author={postLog['author']} description={postLog['description']}
                          datetime={postLog['datetime']}/>
                )
            })
        } else {
            postArrayRender.push(
                <p key={'no-post'}>No Post Found</p>
            )
        }

        return postArrayRender;
    }
    render() {

        return (
            <div>
                {this.renderPostHeader(this.props.selectedPost)}
                {this.renderPostBody(this.props.selectedPost)}\
            </div>
        )
    }
}

ViewIssueWidget.propTypes = {
    selectedPost: PropTypes.object
};
