import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Supported from "../Supported/Supported";
import Comment from "../Comment/Comment";
import Review from "../Review/Review";
import Home from "../Home/Home";
import Success from "../Success/Success";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/">
            <Header />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/feeling">
            <Feeling />
          </Route>
          <Route exact path="/understanding">
            <Understanding />
          </Route>
          <Route exact path="/supported">
            <Supported />
          </Route>
          <Route exact path="/comment">
            <Comment />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
