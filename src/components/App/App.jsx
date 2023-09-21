import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <div>
          <Route path="/">
            {/* <Header /> */}
          </Route>
          <Route exact path="/">
            {/* <Home /> */}
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/feeling">Feeling</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
            <li>
              <Link to="/supported">Supported</Link>
            </li>
            <li>
              <Link to="/comment">Comment</Link>
            </li>
            <li>
              <Link to="/success">success</Link>
            </li>
          </Route>
          <Route exact path="/feeling">
            {/* <Feeling /> */}
          </Route>
          <Route exact path="/feedback">
            {/* <Feedback /> */}
          </Route>
          <Route exact path="/supported">
            {/* <Supported /> */}
          </Route>
          <Route exact path="/comment">
            {/* <Comment /> */}
          </Route>
          <Route exact path="/success">
            {/* <Success /> */}
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
