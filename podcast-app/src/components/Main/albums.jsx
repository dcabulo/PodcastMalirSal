import React from "react";

const Album = () => {
  return (
    <div className="album py-4 bg-ligth">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mb-4 shadow-sm">
              <div className="text-center m-1">
                <img
                  src="https://i.pinimg.com/originals/09/4e/33/094e33276c5e6b4da287633670c9130a.png"
                  className="rounded m-auto d-block"
                  width="150"
                  alt="logo-spotify"
                />
              </div>
              <div className="card-body p-2">
                <h5 className="card-title">Spotify</h5>
                <p className="card-text">
                  Si tienes premium nos escuchas sin ads, 
                  sino te saldra una pequeña publicada cada determinado tiempo igual es free.
                </p>
                <a
                  href="https://open.spotify.com/show/3tQ0GNKkXkob2YyXfXNBr2?si=WR8PtkVlTWKnKJhH3Nh1Ng"
                  className="btn btn-outline-secondary"
                >
                  Hear me!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-4 shadow-sm">
              <div className="text-center m-1">
                <img
                  src="data:image/png;base64,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"
                  className="rounded m-auto d-block"
                  width="150"
                  alt="logo-soundcloud"
                />
              </div>
              <div className="card-body p-2">
                <h5 className="card-title">SoundCloud</h5>
                <p className="card-text">
                  Plataforma completamente gratuita nos escucharas sin parar, 
                  perderas el tiempo derecho sin ads.
                </p>
                <a
                  href="https://soundcloud.com/user-218767519"
                  className="btn btn-outline-secondary"
                >
                  Hear me!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-4 shadow-sm">
              <div className="text-center m-1">
                <img
                  src="https://images.vexels.com/media/users/3/129234/isolated/preview/73970c892d748c7507db8e10d71535b0-icono-del-logo-de-apple-by-vexels.png"
                  className="rounded m-auto d-block"
                  height="150"
                  alt="apple-logo"
                />
              </div>
              <div className="card-body p-2">
                <h5 className="card-title">Apple Podcast</h5>
                <p className="card-text">
                  No sabemos muy bien como funciona esta plataforma, 
                  pero de algo estamos seguro es que aqui tambien nos puedes escuchar
                </p>
                <a
                  href="https://podcasts.apple.com/co/podcast/malirsal-podcast/id1529371132"
                  className="btn btn-outline-secondary"
                >
                  Hear me!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
