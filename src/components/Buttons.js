import React, {useState} from "react";
import Navbar from "./Navbar";
import axios from "axios";

const EventButtons = ({conversationUuid}) => {
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
        currentButtonMessage = "Hope and dreams";
        break;

      default:
        currentButtonMessage = "I'd like to ask you more questions about the Presenting Complaint. ";

    }
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

        <div >
         
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
        <br /><br /><Navbar />          
      </div>

     );
}
 
export default EventButtons;