import Chat from './components/Chat';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

import Landing from './components/Landing';
import './App.css';
import Questionnaire from './components/Questionnaire';

function App() {


  return (
    <div >
      <div >
        <header>
          <Header />
        </header>


        <Router>
          <Switch>
            <Route path="/chat">
              <main className="container-fluid">
                <Chat />
              </main>
            </Route>
            <Route path="/">
              <Landing />
            </Route>
            <Route path="about">
              <About />
            </Route>
            <Route path="questionnaire">
              <Questionnaire />
            </Route>
          </Switch>
        </Router>

        <div>
          {/* <img className="Conversational_flow_v1" src={process.env.PUBLIC_URL + 'Conversational_flow_v1.png'} alt="Write something here" /> */}
          {/* <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> */}
        </div>
      </div>
    </div>
  );
}

export default App;
