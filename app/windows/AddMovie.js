import React, { Component, Suspense } from "react";
const MovieInfo = React.lazy(() => import("../components/MovieInfo"));

const addNewMovie = () => {
    alert("Add new movie");
}

export default function AddMovie() {
    return (
        <Suspense fallback="Loading...">
            <MovieInfo handler={addNewMovie} />
        </Suspense>
    )
}