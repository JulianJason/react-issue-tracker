import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Post.scss";

export class Post extends Component {
    constructor(props) {
        super(props)
    }

    render() {



        return (
            <div className="post-container">
                <div className="post-header" >
                    <p className="post-header-author">{this.props.author}</p> <p className="post-header-minor"> Posted on {this.props.datetime}</p>
                </div>

                <div className="post-body">
                  {this.props.description === null ? <p className="no-desc"> No Description Provided</p> :
                    <p className="post-description">{this.props.description}</p>
                  }
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    author: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    description: PropTypes.string
};
