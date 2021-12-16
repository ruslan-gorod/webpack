import React, { Component, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary.js";
import '../styles/App.scss';

const MainComponent = React.lazy(() => import("../containers/MainComponent.jsx"));
const MainHeader = React.lazy(() => import("./MainHeader"));
const Footer = React.lazy(() => import("./Footer"));

const App = () => (
    <Suspense fallback="Loading...">
        <ErrorBoundary>
            <div className="App">
                <MainHeader className="main-header">
                    <h1>Top films</h1>
                </MainHeader>
                <MainComponent className="main-component" />
                <Footer>
                    <hr />
                    <p className="footer-p">&copy; Ruslan Malyavsky</p>
                </Footer>
            </div>
        </ErrorBoundary>
    </Suspense>
)

export default App
