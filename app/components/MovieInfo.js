import React from "react";
import PropTypes from 'prop-types'

export default function MovieInfo(props) {
    return (
        <div className="add-edit-movie">
            <label >Title:
                <input type="text" name="movie-title">{this.props.movie.title}</input>
            </label>
            <label >Description:
                <input type="text" name="movie-description">{this.props.movie.description}</input>
            </label>
            <input type="submit" value="Edit Movie" onClick={this.props.handler}/>
        </div>
    )
}

MovieInfo.PropTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

MovieInfo.defaultProps = {
    title: "Default title",
    description: "Default description"
}