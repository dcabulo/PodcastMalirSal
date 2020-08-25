import React, { Component } from "react";
import NavBar from "./components/Header/navbar";
import DropDown from "./components/Header/dropdown";
import Jumbotron from "./components/Main/jumbotron";
import Album from "./components/Main/albums";
import Footer from "./components/Main/footer";
import * as firebase from "firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      loading: false,
      pass: true,
    };
  }
  initialCounter=()=>{
    this.setState({ loading: true });
    const counterRef = firebase.database().ref("counter");
    counterRef.on("value", (snap) => {
      this.setState({
        loading: false,
        counter: snap.val(),
      });
    });
  }
  
  componentDidMount() {
    this.initialCounter();
  }
  render() {
    return (
      <React.Fragment>
        <DropDown />
        <NavBar />
        <main>
          <Jumbotron
          counter={this.state.counter}
          loading={this.state.loading}
          pass={this.state.pass}
          onUpdate={this.handleUpdateCounter}
           />
          <Album />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
  handleUpdateCounter = () => {
    const counterRef = firebase.database().ref();
    if (this.state.pass) {
      counterRef.update({ counter: this.state.counter + 1 });
      this.setState({ pass: false });
    } else {
      counterRef.update({ counter: this.state.counter - 1 });
      this.setState({ pass: true });
    }
  };
}

export default App;
