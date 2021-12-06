import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import MainMenu from "./MainMenu";
import MovieList from "./MovieList";

const MainComponent = () => {
    return (
        <React.Fragment>
            <MainMenu />
            <ErrorBoundary>
                <MovieList />
            </ErrorBoundary>
        </React.Fragment>
    )
}

export default MainComponent