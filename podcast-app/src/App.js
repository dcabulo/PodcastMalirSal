import React, { Component } from "react";
import NavBar from "./components/Header/navbar";
import DropDown from "./components/Header/dropdown";
import Jumbotron from "./components/Main/jumbotron";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <DropDown />
        <NavBar />
        <main>
          <Jumbotron/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
