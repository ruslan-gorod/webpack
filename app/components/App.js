import React, { Component } from "react";
import MainComponent from "../containers/MainComponent.jsx";
import MainHeader from "./MainHeader";
import Footer from "./Footer"

class App extends Component {
    render() {
        return (
            <div>
                <h5>Hello world from my first webpack!</h5>
                <MainHeader>
                    <h1>Films</h1>
                </MainHeader>
                <MainComponent />
                <Footer>
                    <p>Ruslan Malyavsky</p>
                </Footer>
            </div>
        );
    }
}

export default App;