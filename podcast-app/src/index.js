import React from 'react';
import ReactDom from 'react-dom'
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCWCox31pH1tWziCfjAq7SPw86vMHDNHss",
    authDomain: "podcastmalirsal.firebaseapp.com",
    databaseURL: "https://podcastmalirsal.firebaseio.com",
    projectId: "podcastmalirsal",
    storageBucket: "podcastmalirsal.appspot.com",
    messagingSenderId: "30911837606",
    appId: "1:30911837606:web:e46d4b0906fb4fdd7f4b67",
    measurementId: "G-NHZYP392VT"
  };
  firebase.initializeApp(firebaseConfig);

ReactDom.render(<App />,document.getElementById("root"))


