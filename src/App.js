import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SignedOutLayout from "./layouts/SignedOutLayout";

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
