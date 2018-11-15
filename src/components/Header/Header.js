import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';

import './Header.scss';
import tigerIcon from 'assets/tiger-paw-icon.png';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.handleRouting = this.handleRouting.bind(this)
    }

    handleRouting(route) {
        return null
    }

    render() {
        return (
            <Row className="nav-bar" >

                <Col className="header-left" sm={6}>
                    <div className="nav-bar-button">
                        <div className="inline-div">
                            <img className="tiger-icon" src={tigerIcon} alt="Tiger Tracker"/>
                        </div>
                        <p className="tiger-text"> Tiger Track</p>
                    </div>
                    <div className="nav-bar-button">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="nav-bar-button">
                        <Link to="/explore">Explore</Link>
                    </div>
                    <div className="nav-bar-button">
                        <Link to="/analytics">Analytics</Link>
                    </div>

                </Col>

                <Col className="header-right" sm={6}>
                    <div className="nav-bar-button float-right" onClick={this.props.handleLogin}>
                        Login
                    </div>
                </Col>
            </Row>
        )
    }
}
Header.propTypes = {
    //handleLogin: PropTypes.func.isRequired
};
