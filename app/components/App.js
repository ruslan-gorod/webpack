import React, { Component } from "react";
import MainComponent from "../containers/MainComponent.jsx";
import MainHeader from "./MainHeader";
import Footer from "./Footer"
import ErrorBoundary from "./ErrorBoundary.js";


const App = () => (
    <>
        <ErrorBoundary>
            <MainHeader>
                <h1>Top films</h1>
            </MainHeader>
            <MainComponent />
            <Footer>
                <hr />
                <p>&copy; Ruslan Malyavsky</p>
            </Footer>
        </ErrorBoundary>
    </>
)

export default App
