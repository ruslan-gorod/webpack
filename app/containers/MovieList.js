import React from "react";
import movies from "../data/moviesData.js"
import MovieCard from "../components/MovieCard";
import '../styles/MovieList.scss';

export default function MovieList() {
    const movieList = movies.map(movie => (
        <li className="movie-list-item">    
            <MovieCard
                title={movie.title}
                description={movie.description}
                key={movie.id}
            />
        </li>))

    return (
        <ul className="movie-list">
            {movieList}
        </ul>
    )
}