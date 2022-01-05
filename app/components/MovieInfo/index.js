import React from "react";
import PropTypes from 'prop-types'

export default function MovieInfo({title, src, description, handler}) {
    return (
        <div style={{ backgroundImage: {src}}}>
            <h3>{title}</h3>
            <img src={src} />
            <p>{description}</p>
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