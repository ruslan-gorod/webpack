import React, { useState } from "react";
import PropTypes from 'prop-types'
import PopupWindow from '../PopupWindow/PopupWindow';
import MovieInfo from "../MovieInfo";
import './MovieCard.scss'

export default function MovieCard(props) {
    const [showAddMovie, setShowAddMovie] = useState(false)

    const onClick = () => {
        setShowAddMovie(true);
    } 
    
    return (
        <div className="movie-card">
            <button className="movie-card-menu" onClick={ onClick } >...</button>
            <PopupWindow active={showAddMovie} setActive={setShowAddMovie}>
                <ul className="movie-menu-list">
                    <li>Edit movie</li>
                    <li>Delete movie</li>
                </ul>
            </PopupWindow>
            <MovieInfo title={props.title} src={props.src} description={props.description}/>
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