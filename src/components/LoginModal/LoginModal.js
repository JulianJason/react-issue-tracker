import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './LoginModal.scss'

export class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    getUsernameValue() {
        return this.refs.username.value;
    }

    getPasswordValue() {
        return this.refs.password.value;
    }

    handleSubmit() {
        this.props.loginUser(this.getUsernameValue(), this.getPasswordValue());
    }

    handleLogout() {
        this.props.logoutUser();
    }

    render() {
        if (this.props.isAuthenticated === true) {
            return (
                <div>
                    <p>Authenticated!</p>
                    <input onClick={this.handleLogout} type="submit" value="Logout" />
                </div>
            );
        }

        return (
            <div className="modal display-block">
                <section className="modal-main fade-in">
                <br />
                    <input type="text" ref="username" placeholder="Username" /><p />
                    <input type="password" ref="password" placeholder="Password" /><p />
                    <input onClick={this.handleSubmit} type="submit" value="Login" /><p />
                    <p>Not login yet</p>
                </section>
            </div>
        );
    }
}

LoginModal.propTypes = {
    loginUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};
