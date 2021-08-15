import React, { useEffect, useRef } from "react";
import useSWR from "swr";


const fetcher = url => fetch(url).then(res => res.json());



const PreviousMessages = ({conversationUuid}) => {
    const BASE_URL = process.env.REACT_APP_API_ENDPOINT 
    const url = `${BASE_URL}/messages/${conversationUuid}`
    // let data = [];
    const { data, error } = useSWR(
        url,
        fetcher, { refreshInterval: 1000 }
    );
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
            <div ref={chatEndRef}/>

        </div>
        // </ScrollToBottom>

    );

}

export default PreviousMessages;



