import React, { Component } from "react";
import NavBar from "./components/Header/navbar"
import DropDown from "./components/Header/dropdown"

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <DropDown/>
            <NavBar/>
           
        </React.Fragment>
    );
  }
}

export default App;
