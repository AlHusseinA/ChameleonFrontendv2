import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const EventButtons = ({ conversationUuid }) => {
  let [currentButtonMessage, setCurrentButtonMessage] = useState('');
  const BASE_URL = process.env.REACT_APP_API_ENDPOINT
  const url = `${BASE_URL}/intentions/`

  function transitionSection(number) {
    //   console.log('Button click ...');
    //   // event.preventDefault();
    console.log(number)
    switch (number) {
      case 1:
        currentButtonMessage = "I'm going to ask you questions about your Past Medical History";
        break;
      case 2:
        currentButtonMessage = "I'm going to ask you questions about your Family History";
        break;

      case 3:
        currentButtonMessage = "I'm going to ask you questions about your Drug History";
        break;

      case 4:
        currentButtonMessage = "I'm going to ask you questions about your Social History";
        break;

      case 5:
        currentButtonMessage = "Let's discuss Ideas, Concerns, and Expectations";
        break;
      // case 6:
      //   currentButtonMessage = "Functional Enquiry";
      //   break;
      // case 7:
      //   currentButtonMessage = "Cardiorespiratory Enquiry";
      //   break;
      // case 8:
      //   currentButtonMessage = "Gastrointestinal Enquiry";
      //   break;
      // case 9:
      //   currentButtonMessage = "Genitourinary Enquiry";
      //   break;
      // case 10:
      //   currentButtonMessage = "Neurological Enquiry";
      //   break;
      default:
        currentButtonMessage = "I'd like to ask you more questions about the Presenting Complaint. ";

    }
    // componentDidMount() {
    //   // currentButtonMessage = "Hey Chameleon, I'm ordering you to show the exact welcome message"
    //   axios.post(url, {
    //     welcomeMessage = "Hey Chameleon, I'm ordering you to show the exact welcome message"
    //     message: welcomeMessage,
    //     uuid: conversationUuid,
  
    //   })
    //     .then((response) => {
    //       console.log(response);
    //       setCurrentButtonMessage("");
    //     }, (error) => {
    //       console.log(error);
    //     });
    // }
    console.log(currentButtonMessage)

    axios.post(url, {

      message: currentButtonMessage,
      uuid: conversationUuid,

    })
      .then((response) => {
        console.log(response);
        setCurrentButtonMessage("");
      }, (error) => {
        console.log(error);
      });
  }
  return (

    <div>
      <div className="container border border-primary bg-dark text-white border border-5">
        <div className="container">
          <br />
        <img  class="img-thumbnail float-right" src={process.env.PUBLIC_URL + 'John Doe.png'} alt="AI generated image of John-Doe"/>

        </div>
        <br /><h5><b> Patient info:</b></h5>
        <p><b>Name:</b> John Doe</p>
        <p><b>Gender:</b> Male</p>
        <p><b>Age:</b> 43</p>
        <p><b>DOB:</b> 06/02/1978</p>
        <p><b>Presenting Complaint:</b> Injured lower back while exercising.</p>
      </div>
      <div>
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
        <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(5)}>Ideas, Concerns, and Expectations (ICE)</a><br />
        <br />
        {/* <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(6)}>Functional Enquiry (general)</a><br />
        <br />
        <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(7)}>Cardiorespiratory Enquiry</a><br />
        <br />
        <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(8)}>Gastrointestinal Enquiry</a><br />
        <br />
        <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(9)}>Genitourinary Enquiry</a><br />
        <br />
        <a class="waves-effect waves-light btn" type="button" onClick={() => transitionSection(10)}>Neurological Enquiry</a><br />
        <br /> */}

      </div>
      <Navbar />
    </div>

  );
}

export default EventButtons;