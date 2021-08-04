import React, { useState } from "react";
import MessageInput from "./MessageInput";
import PreviousMessages from "./PreviousMessages";
import { v4 as uuidv4 } from 'uuid';
import Event from "./Event";



const Chat = () => {
    const [conversationUuid, setConversationUuid] = useState(uuidv4());

    const messages = [];
    return ( 
        <div>
            <PreviousMessages messages={messages} conversationUuid={conversationUuid}/>
            <MessageInput conversationUuid={conversationUuid}/>
        </div>
    );
}

export default Chat;