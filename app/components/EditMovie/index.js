import React, { Component, Suspense } from "react";
const MovieInfo = React.lazy(() => import("../MovieInfo"));

const editOldMovie = () => {
    alert("Edit movie");
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

export default EditMovie;