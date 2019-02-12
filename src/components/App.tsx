import React, { Component } from "react";
import "./styles/App.css";
import Searchbar from "./Searchbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
      </div>
    );
  }
}

export default App;
