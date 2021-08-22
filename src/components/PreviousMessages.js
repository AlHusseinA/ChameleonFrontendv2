import React, { useEffect, useRef } from "react";
import useSWR from "swr";




// this component will constantly display all previoua messages exchanged between the user (green) and
// Chameleon (blue)


const fetcher = url => fetch(url).then(res => res.json());

const PreviousMessages = ({conversationUuid}) => {

    // ChameleonBackendv3Docker-main\ChameleonBackendv3Docker-main\chatbot\config\urls.py
    // Django side - line 26, path('messages/<conversation_uuid>', PreviousMessagesView.as_view()),
    const BASE_URL = process.env.REACT_APP_API_ENDPOINT 
    const url = `${BASE_URL}/messages/${conversationUuid}`
    // here url is the dialogflow endpoint containing the session id


    // useSWR hook is used fetch the message history from the django backend
    // data will contain the message history
    // https://swr.vercel.app/ 
    // inside useSWR there'll be an arrow function (fetcher defined above) + a url for the api endpoint
    const { data, error } = useSWR(
        url,
        fetcher, { refreshInterval: 1000 }
    );

    //
    const chatEndRef = useRef(null);
    const ScrollToBottom = () =>{
        // debugger
        if (chatEndRef.current !== null){
            chatEndRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }

    }
    useEffect(ScrollToBottom, [data])

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
        
    return (
        // <ScrollToBottom className="myscroll">
        <div className="card h-50 d-inline-block border border-primary mb-3" style={{minWidth: "-webkit-fill-available"}}>
            
            <ul class="list-group list-group-flush">
                {
                    data.map((item, idx) => (
                        (
                            item.actor === 'Chameleon' ? <li key={idx} class="list-group-item list-group-item-action list-group-item-primary">{item.actor}-{item.message}</li> : <li class="list-group-item list-group-item-action list-group-item-success">{item.actor}-{item.message}</li>
                        )
                    )

                    )
                }

            </ul>
            {/* // this is an imaginary div. Once it's reached (chaEndRef no longer null) then scrollIntoView */}
            <div ref={chatEndRef}/> 

        </div>

    );

}

export default PreviousMessages;



