import React from "react";
import PropTypes from 'prop-types'

export default function MovieInfo(props) {
    return (
        <div className="add-edit-movie">
            <label >Title:
                <input type="text" name="movie-title">{props.title}</input>
            </label>
            <label >Description:
                <input type="text" name="movie-description">{props.description}</input>
            </label>
            <input type="submit" value="Edit Movie" onClick={props.handler}/>
        </div>
    )
}

MovieInfo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

MovieInfo.defaultProps = {
    title: "Default title",
    description: "Default description"
}