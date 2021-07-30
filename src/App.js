import Chat from './components/Chat';
import Event from './components/Event';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';


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

  // function handleClick(event) {
  //   // event.preventDefault();
  //   console.log('Button click ...');
  //   axios.post(url, {
  //     message: "Hello, I'm Django. I'm one of the doctors here. What can I do for you today?"   
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       setCurrentButtonMessage("");
  //     }, (error) => {
  //       console.log(error);
  //     });
  // }



  return (
    <div>
      <BrowserRouter>
        <div className="parent">
          <header>
            <Header />
            {/* <Route exact path="/Questionnaire" component={Questionnaire} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Landing} /> */}

          </header>
          <div className="left-side" >
            <Event />
            {/* <a class="waves-effect waves-light btn" type="button" onClick={handleClick}>Presenting Complaint</a><br /> */}
            {/* <a class="waves-effect waves-light btn" type="button">Presenting Complaint</a><br /> */}
            {/* ("Hello, I'm Django. I'm one of the doctors here. What can I do for you today?") */}
            {/* <input type="event" value={currentButtonMessage} onChange={e=> setCurrentButtonMessage(e.target.value)}  class="form-control" id="inlineFormInputGroupUsername" /> */}
            <br />
            <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(7)}>Presenting Complaint</a><br />
            <br />
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
          <main className="col-8">
            <Chat />
          </main>


          <div className="right-side">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <img className="conversation-flow" src={process.env.PUBLIC_URL + 'conversational_structure_chameleon_27072021.png'} alt="Write something here" />
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
