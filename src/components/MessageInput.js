import React, { useState } from 'react';
import axios from 'axios';



const MessageInput = ({ conversationUuid }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const BASE_URL = process.env.REACT_APP_API_ENDPOINT
  const url = `${BASE_URL}/intentions/`

  function handleSubmit(event) {
    event.preventDefault();

    axios.post(url, {
      message: currentMessage,
      uuid: conversationUuid
    })
      .then((response) => {
        console.log(response);
        setCurrentMessage("");
      }, (error) => {
        console.log(error);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div class="col-12">
        <label class="visually-hidden" for="inlineFormInputGroupUsername">Enter your question to the patient</label>
        <div class="input-group">
          <input type="text" value={currentMessage} onChange={e => setCurrentMessage(e.target.value)} class="form-control" id="inlineFormInputGroupUsername" placeholder="Enter your question to the patient" />
        </div>
      </div>
      <div class="col-8 mt-1">
        <button type="submit" class="btn btn-primary">Ask Chameleon!</button>
      </div>
    </form>
  );
}

export default MessageInput;