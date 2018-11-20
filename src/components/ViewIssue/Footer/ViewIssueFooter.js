import React, { Component } from "react";
import _ from "lodash";

import "./ViewIssueFooter.scss";

class ViewIssueFooter extends Component {


    render() {
        const isAuthenticated = !_.isEmpty(this.props.authData.username)
        const pleaseLogInFooter = (
          <div className={"login-tooltip"}>
              Please log in to comment
          </div>
        )

        const newPostInputFooter = (
            <div className={"new-post-input-container"}>
                <textarea
                    className={"new-post-issue-body"}
                >

                </textarea>
                <div className={"new-post-submit-button-container"}>
                    <button
                        className="new-post-submit-button"
                    >
                        Submit new Post
                    </button>
                </div>
            </div>
        );

        if (isAuthenticated) {
            return newPostInputFooter
        } else {
            return pleaseLogInFooter
        }
    }
}

ViewIssueFooter.propTypes = {
};

export default ViewIssueFooter;
