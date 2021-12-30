import React, { useState } from "react";
import PropTypes from 'prop-types'
import './MovieCard.scss'

const AddMovie = React.lazy(() => import("../AddMovie"));

export default function MovieCard(props) {
    const [showAddMovie, setShowAddMovie] = useState(false)
    const onClick = () => {
        setShowAddMovie(true);
        console.log('onClick');
    } 
    return (
        <div className="movie-card">
            <h3>{props.title}<button className="movie-card-menu" onClick={ onClick } >...</button></h3>
            <ul className="movie-menu-list">
                <li>Add movie</li>
                <li>Edit movie</li>
                <li>Delete movie</li>
            </ul>
            <p>{props.description}</p>
            <>
                {showAddMovie ? <AddMovie /> : null}
            </>
        </div>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

MovieCard.defaultProps = {
    title: "Missing title",
    description: "Missing description"
}