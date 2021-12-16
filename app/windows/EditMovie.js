import React, { Component, Suspense } from "react";
const MovieInfo = React.lazy(() => import("../components/MovieInfo"));

const editOldMovie = () => {
    alert("Add new movie");
}

class EditMovie extends Component {
    constructor(props) {
        super(props)
        this.state = Object.create(props);
    }

    render() {
        return (
            <Suspense fallback="Loading movie info...">
                <MovieInfo 
                    movie={this.state.movie}
                    handler={editOldMovie} />
            </Suspense>
        )
    }
}

export default AddMovie;