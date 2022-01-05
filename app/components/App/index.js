import React, { Suspense, useState } from "react";
import ErrorBoundary from "../ErrorBoundary";
import '../../styles/App.scss';
import AddMovie from "../AddMovie";

const MainComponent = React.lazy(() => import("../../containers/MainComponent.jsx"));
const MainHeader = React.lazy(() => import("../MainHeader"));
const Footer = React.lazy(() => import("../Footer"));

const App = () => {
    const [popupActive, setPopupActive] = useState(false);

    return (
        <ErrorBoundary>
            <Suspense fallback="Loading...">
                <div className="App">
                    <MainHeader className="main-header">
                        <button className="add-movie-button"
                            onClick={() => setPopupActive(true)}>
                            + ADD MOVIE
                        </button>
                        <h1>Find your movie</h1>
                    </MainHeader>
                    <MainComponent className="main-component" />
                    <AddMovie popupActive={popupActive} setPopupActive={setPopupActive} />
                    <Footer>
                        <hr />
                        <p className="footer-p">&copy; Ruslan Malyavsky</p>
                    </Footer>
                </div>
            </Suspense>
        </ErrorBoundary>
    );
};

export default App
