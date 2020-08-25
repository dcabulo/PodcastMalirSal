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
          {/* <img src="https://i.ibb.co/d4D4Bzz/Podcast.png" alt="Podcast-img" width="300" className="img-fluid"/> */}
          <p className="lead text-muted">
            4 personajes hablando sobre como perder el tiempo, ninguno tiene la
            razón, no somos especialistas en nada y tampoco queremos
            convertirnos en ello. Nos gusta hablar sobre cosas sin sentido y
            burlanos del diario vivir espero pierdas el tiempo con nosotros. Si
            te gusta nuestro contenido puedes darnos un like!
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
