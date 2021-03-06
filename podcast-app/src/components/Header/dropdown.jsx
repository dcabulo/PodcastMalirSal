import React from "react";

const DropDown = () => {
  return (
    <div className="bg-dark collapse" id="navbarHeader">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <h4 className="text-white">Algo de nosotros</h4>
            <p className="text-justify text-white-50">
              Un grupo de amigos Juancho, Richard, Sebas y Diego, 3 paisas y un desconocido
              hablando sobre experiencias, incoherencias y
              sobre todo hablando de cosas sin sentido. Quedate en este
              espacio para conocer mas sobre este proyecto.
            </p>
          </div>
          <div className="col-sm-4 offset-md-1 py-4">
            <h4 className="text-white">Nos encuentras en..</h4>
            <ul className="list-unstyled">
              <li>
                <p className="text-white m-0">CareLibro(soon)</p>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/malirsal.podcast/"
                  className="text-white"
                >
                  Insta
                </a>
              </li>
              <li>
                <p className="text-white m-0">tiktok(never)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
