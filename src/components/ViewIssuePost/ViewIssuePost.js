import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import "./ViewIssuePost.scss";
import _ from "lodash";
import { userLoginAction, userLogoutAction } from "../../actions/auth";
import { connect } from "react-redux";
import { loadIssueAction } from "../../actions/Issues";

export class ViewIssuePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            description: this.props.description,
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const key = target.name;
        this.setState({
            [key]: value
        })
    }

    toggleEdit() {

        this.setState({
            isEditing: true
        })
    }

    onEditSubmit() {
        console.log("ViewIssuePost index is " + this.props.postIndex);
        this.props.onPostEdit(this.props.postIndex, this.state.description);
        this.setState({
            isEditing: false,
        })
    }

    renderEdit () {
        return (
            <div className="post-container">
                <div className="post-header" >
                    <p className="post-header-author">{this.props.author}</p>
                    <p className="post-header-minor"> posted on {this.props.datetime}</p>
                    <button
                        className="post-header-icon icon-cancel"
                        onClick={this.toggleEdit}
                    >
                    </button>
                </div>
                <div className="post-body">
                    <textarea
                        name="description"
                        className="edit-post-body"
                        value={this.state.description}
                        onChange={this.handleChange}
                        autoFocus="autoFocus"
                        autoComplete="off"
                        placeholder="Edit Issue"
                    />
                </div>
                <button
                    className="edit-issue-submit-button"
                    onClick={() => this.onEditSubmit()}
                    disabled= {_.isEmpty(this.state.description)}
                >
                    Confirm changes
                </button>
            </div>
        )
    }

    renderNormal() {
        return (
            <div className="post-container">
                <div className="post-header" >
                    <p className="post-header-author">{this.props.author}</p> <p className="post-header-minor"> posted on {moment(this.props.datetime).format('LLL')}</p>

                    <button
                        className="post-header-icon"
                        onClick={this.toggleEdit}
                    >
                    </button>
                </div>
                <div className="post-body">
                    {this.props.description === null ? <p className="no-desc"> No Description Provided</p> :
                        <p className="post-description">{this.props.description}</p>
                    }
                </div>
            </div>
        )
    }
    render() {
        if (this.state.isEditing) {
            return this.renderEdit();
        } else {
            return this.renderNormal();
        }
    }
}

ViewIssuePost.propTypes = {
    author: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    postIndex: PropTypes.number.isRequired,
    description: PropTypes.string
};

const mapStateToProps = state => ({
    authData: state.authReducer.authData,

});

const mapDispatchToProps = dispatch => ({
    dispatchLoadIssue: (issueId) => {
        dispatch(loadIssueAction(issueId))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewIssuePost);
