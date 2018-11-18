import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import _ from 'lodash';

import './LoginModal.scss'
import { userLoginAction, userLogoutAction } from "../../actions/auth";

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            username: '',
            password: '',
        }
    }

    handleLogout() {
        this.props.logoutUser();
    }

    render() {
        if (this.props.isAuthenticated === true) {
            return (
                <div>
                    <p>Authenticated!</p>
                    <button onClick={this.props.dispatchLogout} type="submit" value="Logout" />
                </div>
            );
        }

        return (
            <div className="modal display-block" onClick={this.props.hideLoginModal}>
                <section className="modal-main fade-in">

                    <p className="login-modal-text">Sign in to Tiger Track</p>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={event => this.setState({username: event.target.value})}
                        placeholder="Username"

                    />
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={event => this.setState({password: event.target.value})}
                        placeholder="Password" />
                    <button
                        className="login-button"
                        onClick={() => this.props.dispatchLogin(this.state.username, this.state.password)}
                        type="submit"
                        disabled={_.isEmpty(this.state.username) || _.isEmpty(this.state.password)}
                    >
                        Login
                    </button>
                </section>
            </div>
        );
    }
}

LoginModal.propTypes = {
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    authData: state.authReducer.authData
});

const mapDispatchToProps = dispatch => ({
    dispatchLogin: (username, password) => {
        dispatch(userLoginAction(username, password))
    },
    dispatchLogout: () => {
        dispatch(userLogoutAction())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
