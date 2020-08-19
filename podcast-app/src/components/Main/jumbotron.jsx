import React, { Component } from "react";
import * as firebase from "firebase";

class Jumbotron extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      loading: false,
    };
  }

  initialCounter = () => {
    this.setState({ loading: true })
    var counterRef = firebase.database().ref("counter");
    counterRef.on("value", (snap) => {
      this.setState({
        loading: false,
        counter: snap.val(),
      });
    });
    console.log(this.state.counter);
    
  }

  componentDidMount() {
    this.initialCounter()
  
  }
  render() {
    const checkLoading = this.state.loading ? <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> : this.state.counter
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
            <button className="btn btn-secondary btn-lg my-2">
              <i className="far fa-heart"></i>
              <span className="badge badge-ligth ml-2">
                {checkLoading}
              </span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Jumbotron;
