import React, { Suspense } from "react";
const MovieInfo = React.lazy(() => import("../MovieInfo"));

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