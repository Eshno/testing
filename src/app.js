import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Routes from "./Routes";
import "./styles/App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default hot(module)(App);
