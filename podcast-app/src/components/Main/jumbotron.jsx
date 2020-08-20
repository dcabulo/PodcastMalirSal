import React, { Component } from "react";
import * as firebase from "firebase";

class Jumbotron extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      loading: false,
      pass: true,
    };
  }
  initialCounter = () => {
    this.setState({ loading: true });
    const counterRef = firebase.database().ref("counter");
    counterRef.on("value", (snap) => {
      this.setState({
        loading: false,
        counter: snap.val(),
      });
    });
  };

  /*  changeBackGround = (e,color) => {
    e.target.style.color = color;
  }; */

  componentDidMount() {
    this.initialCounter();
  }
  render() {
    const checkLoading = this.state.loading ? (
      <span
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
    ) : (
      this.state.counter
    );
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Malir Sal Podcast</h1>
          <p className="lead text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            culpa. Nisi expedita doloremque, quam eius corrupti exercitationem
            molestias deserunt quaerat pariatur dolorem quos eos, quis odio in
            nihil perferendis voluptatem!
          </p>
          <div className="container">
            <button
              className="btn btn-secondary btn-lg my-2"
              onClick={this.updateCounter}
            >
              <i
                onMouseOver={(e) => (e.target.style.color = "#F50057")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                className={this.state.pass ? "far fa-heart" : "fas fa-heart"}
              ></i>
              <span className="badge badge-ligth ml-2">{checkLoading}</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
  updateCounter = () => {
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

export default Jumbotron;
