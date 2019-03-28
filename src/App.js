import React, { Component } from "react";
import "./App.css";
import SignedOutLayout from "./layouts/SignedOutLayout";

import { Route, BrowserRouter } from "react-router-dom";
import SignedInLayout from "./layouts/SignedInLayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignedOutLayout />
      </div>
    );
  }
}

export default App;
