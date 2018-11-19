import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from 'react-grid-system';
import { connect } from 'react-redux';
import { LoginModal } from "../../components/index";
import _ from 'lodash';

import './Header.scss';
import tigerIcon from 'assets/tiger-paw-icon.png';
import {userLoginAction, userLogoutAction} from "../../actions/auth";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginModalShown: false
        };

        this.showLoginModal = this.showLoginModal.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    showLoginModal = () => {
        this.setState({ isLoginModalShown: true });
    };

    hideLoginModal = () => {
        this.setState({ isLoginModalShown: false,
            justLoggedOut: false
        });
    };

    handleLogout() {
        this.props.dispatchLogout()
        this.setState({
            isLoginModalShown: true,
            justLoggedOut: true
        });
    }
    render() {

        const isLoggedIn = (
            <Col className="header-right" sm={6}>
                <p className="welcome-text">Welcome, {this.props.authData.username}</p>
                <div className="nav-bar-button float-right" onClick={() => this.handleLogout()}>
                    Logout
                </div>
            </Col>
        );
        const isNotLoggedIn = (
            <Col className="header-right" sm={6}>
                <div className="nav-bar-button float-right" onClick={() => this.showLoginModal()}>
                    Login
                </div>
            </Col>
        );
        return (
            <Row className="nav-bar" >

                <Col className="header-left" sm={6}>
                    <div className="nav-bar-button">
                        <div className="inline-div">
                            <img className="tiger-icon" src={tigerIcon} alt="Tiger Tracker"/>
                        </div>
                        <p className="tiger-text"> Tiger Track</p>
                    </div>
                </Col>
                {_.isEmpty(this.props.authData.username) ? isNotLoggedIn : isLoggedIn}
                {this.state.isLoginModalShown ?
                    <div className="highest-z-index">
                        <LoginModal
                            handleLogin={this.props.dispatchLogin}
                            hideModal={this.hideLoginModal}
                            isAuthenticated={!_.isEmpty(this.props.authData.username)}
                            authData={this.props.authData}
                            isAuthenticating={this.props.isAuthenticating}
                            justLoggedOut={this.state.justLoggedOut}
                        />
                    </div>
                    : null}
            </Row>
        )
    }
}
Header.propTypes = {
    showLoginModal: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    authData: state.authReducer.authData,
    isAuthenticating: state.authReducer.isAuthenticating
});
const mapDispatchToProps = dispatch => ({
    dispatchLogin: (username, password) => {
        dispatch(userLoginAction(username, password))
    },
    dispatchLogout: () => {
        dispatch(userLogoutAction())
    }
});

export default connect(mapStateToProps , mapDispatchToProps)(Header);
