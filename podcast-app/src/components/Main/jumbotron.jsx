import React, { Component } from "react";


class Jumbotron extends Component {
  render() {
    const { counter, loading, pass, onUpdate } = this.props;
    const checkLoading = loading ? (
      <span
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
    ) : (
      counter
    );
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Podcast Malir-Sal</h1>
          <p className="lead text-muted">
            Cuatro personajes hablando sobre cómo perder el tiempo, ninguno tiene la
            razón, no son especialistas en nada y tampoco quieren 
            convertirse en ello. Les gusta hablar sobre cosas sin sentido y
            burlarse del diario vivir. Escuchalos y si te gusta el contenido, compártelo y dale "me gusta"
          </p>
          <div className="container">
            <button
              className="btn btn-secondary btn-lg my-2"
              onClick={onUpdate}
            >
              <i
                onMouseOver={(e) => (e.target.style.color = "#F50057")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                className={pass ? "far fa-heart" : "fas fa-heart"}
              ></i>
              <span className="badge badge-ligth ml-2">{checkLoading}</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Jumbotron;
