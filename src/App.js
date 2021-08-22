import Chat from './components/Chat';
// import Navbar from './components/Navbar';
// import Instructions from './components/Instructions';
import Header from './components/Header';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import FAQs from './components/FAQs';
import Landing from './components/Landing';
import './App.css';


function App() {
  return (
    <div >
      <div >
        <Router>
          <Switch>
            <Route path="/chat">
            {/* header from te 1-line css layout */}
              <header>  
                <Header />
              </header>
              {/* main from te 1-line css layout */}
              <main className="container-fluid"> 
                <Chat />
              </main>
            </Route>
            <Route path="/faqs">
              <FAQs />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
