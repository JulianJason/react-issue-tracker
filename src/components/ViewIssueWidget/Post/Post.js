import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Post.scss";

export class Post extends Component {
    constructor(props) {
        super(props)
    }

    render() {



        return (
            <div>
                <div className="post-header" >
                    <p>{this.props.author}</p> <p> Posted on {this.props.dateTime}</p>
                </div>

                <div className="post-body">
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

