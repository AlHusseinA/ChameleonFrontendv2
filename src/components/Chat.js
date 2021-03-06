import React, { useState } from "react";
import MessageInput from "./MessageInput";
import PreviousMessages from "./PreviousMessages";
import { v4 as uuidv4 } from 'uuid';
// import Navbar from "./Navbar";
import Buttons from "./Buttons"
// import Instructions from "./Instructions";


const Chat = () => {
    const [conversationUuid, setConversationUuid] = useState(uuidv4());

    const messages = [];
    return (
        <div>

            <div className="container row justify-content-between">
                <div className="col-3">
                    <Buttons conversationUuid={conversationUuid} />
                </div>

                <div className="col-6">
                    <PreviousMessages messages={messages} conversationUuid={conversationUuid} />

                    <MessageInput conversationUuid={conversationUuid} />
                </div>


            </div>

        </div>
    );
}

export default Chat;