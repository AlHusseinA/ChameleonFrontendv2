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


      </div>
    </div>
  );
}

export default App;
