import React, {Component} from "react";
import "./App.css";
import RequestView from './RequestView';

class App extends Component {
    render() {
        return (
            <div id="root">
                <RequestView/>
            </div>
        )
    }
}

export default App;
