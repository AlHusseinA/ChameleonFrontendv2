import Chat from './components/Chat';
import Event from './components/Event';
import Header from './components/Header';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import Landing from './components/Landing';
import './App.css';

function App() {
  let [currentButtonMessage, setCurrentButtonMessage] = useState('');
  const BASE_URL = process.env.REACT_APP_API_ENDPOINT
  const url = `${BASE_URL}intentions/`

  function transitionSection(number) {
    //   console.log('Button click ...');
    //   // event.preventDefault();
    console.log(number)
    switch (number) {
      case 1:
        currentButtonMessage = "I'm goig to ask you questions about your Past Medical History";
        break;
      case 2:
        currentButtonMessage = "I'm goig to ask you questions about your Family History";
        break;

      case 3:
        currentButtonMessage = "I'm goig to ask you questions about your Drug History";
        break;

      case 4:
        currentButtonMessage = "I'm goig to ask you questions about your Social History";
        break;

      case 5:
        currentButtonMessage = "Hope and dreams";
        break;

      default:
        currentButtonMessage = "I'd' like to inquire more about your gambling habits";

    }
    console.log(currentButtonMessage)

    axios.post(url, {

      message: currentButtonMessage
    })
      .then((response) => {
        console.log(response);
        setCurrentButtonMessage("");
      }, (error) => {
        console.log(error);
      });
  }
  return (
    <div >
      <div className="parent">
        <header>
          <Header />
        </header>
        <div className="left-side" >
          <Event />
          <br />
          <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(7)}>Presenting Complaint</a><br />
          <br />
          <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(1)}>Past Medical History</a><br />
          <br />
          <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(2)}>Family History</a><br />
          <br />
          <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(3)}>Drugs and Allergies History</a><br />
          <br />
          <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(4)}>Social and Lifestyle History</a><br />
          <br />
          <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(5)}>Hope and Final Summary</a><br />
          <br />
          
        </div>

        <Router>
          <Switch>
            <Route path="/chat">
              <main className="col-8">
                <Chat />
              </main>
            </Route>
            <Route path="/">
              <Landing />
            </Route>
            <Route path="about">
              <About />
            </Route>
          </Switch>
        </Router>

        <div className="right-side">
          <img className="Conversational_flow_v1" src={process.env.PUBLIC_URL + 'Conversational_flow_v1.png'} alt="Write something here" />
          {/* <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> */}
        </div>
      </div>
    </div>
  );
}

export default App;
