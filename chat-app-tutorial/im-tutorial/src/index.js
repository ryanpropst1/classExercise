import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./Login/login";
import SignupComponent from "./Signup/signup";
import DashboardComponent from "./Dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAi_drN6VO1WZzjYqg8ckSsvG4CvvzaImg",
  authDomain: "im-tutorial-fdc6f.firebaseapp.com",
  databaseURL: "https://im-tutorial-fdc6f.firebaseio.com",
  projectId: "im-tutorial-fdc6f",
  storageBucket: "im-tutorial-fdc6f.appspot.com",
  messagingSenderId: "965835820263",
  appId: "1:965835820263:web:cb987ac2d765ca69326642",
  measurementId: "G-HBWETN569V"
});

// routing object that we will pass into the ReactDOM.render
const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
