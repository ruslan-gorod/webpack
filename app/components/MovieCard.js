import React from "react";
import PropTypes from 'prop-types'

export default function MovieCard(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

MovieCard.PropTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

MovieCard.defaultProps = {
    title: "Missing title",
    description: "Missing description"
}