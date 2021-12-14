import React from "react";
import movies from "../files/moviesData.js"
import MovieCard from "../components/MovieCard";

export default function MovieList() {
    const movieList = movies.map(movie => (
        <MovieCard
            title={movie.title}
            description={movie.description}
            key={movie.id}
        />))

    return (
        <React.Fragment>
            {movieList}
        </React.Fragment>
    )
}