import React, { Component } from 'react';
import PropTypes from "prop-types";
import _ from 'lodash';
import OutsideClickHandler from 'react-outside-click-handler';

import './LoginModal.scss'

class LoginModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isAuthenticating && !_.isEmpty(this.props.authData.username) ) {
            this.setState({
                username: '',
                password: '',
            });
            this.props.hideModal();
        }
    }
    render() {
        const loggedOutForm = (
            <section className={"modal-main fade-in"}>
                <p> You are logged out</p>
            </section>
        );

        const loginForm = (
            <section className={"modal-main fade-in"}>
                <p className="login-modal-text">Sign in to Tiger Track</p>
                <form>
                    <input
                        className={"login-input"}
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
                </form>
                <button
                    className="login-button"
                    onClick={() => this.props.handleLogin(this.state.username, this.state.password)}
                    type="submit"
                    disabled={_.isEmpty(this.state.username) || _.isEmpty(this.state.password)}
                >
                    Login
                </button>
                {this.props.isAuthenticating ?
                    <div className="dimmer">
                        <div className="spinner" />
                    </div>

                    : null}
            </section>
        )
        return (
            <div className="modal display-block">
                <OutsideClickHandler
                    onOutsideClick={() => this.props.hideModal()}>
                    {this.props.justLoggedOut ? loggedOutForm :  loginForm}
                </OutsideClickHandler>
            </div>
        );
    }
}

LoginModal.propTypes = {
    isAuthenticating: PropTypes.bool,
    hideModal: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired
};



export default LoginModal;
