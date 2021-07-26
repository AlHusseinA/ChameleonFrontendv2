import React from "react";
import MessageInput from "./MessageInput";
import PreviousMessages from "./PreviousMessages";

const Chat = () => {
    const messages = [];
    return ( 
        <div>
            <PreviousMessages messages={messages}/>
            <MessageInput/>

        </div>

    );
}

export default Chat;