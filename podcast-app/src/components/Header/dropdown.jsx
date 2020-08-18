import React, { Component } from "react";

const DropDown = () => {
  return (
    <div className="bg-dark collapse" id="navbarHeader">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <h4 className="text-white">Algo de nosotros</h4>
            <p className="text-white-50">
              Un grupo de amigos hablando sobre experiencias, incoherencias y
              sobretodo hablando sobre como perder el tiempo. Quedate en este
              espacio para conocer mas sobre este proyecto.
            </p>
          </div>
          <div className="col-sm-4 offset-md-1 py4">
            <h4 className="text-white">Nos encuentras en..</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  CareLibro
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Insta
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Nunca Entraremos en tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
