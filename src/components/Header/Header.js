import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from 'react-grid-system'

import styles from './Header.scss';

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
                        Create
                    </div>
                    <div className="nav-bar-button">
                        Edit
                    </div>
                    <div className="nav-bar-button">
                        Close
                    </div>
                    <div className="nav-bar-button">
                        List
                    </div>
                    <div className="nav-bar-button">
                        Reorder
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
    handleLogin: PropTypes.func.isRequired
};
