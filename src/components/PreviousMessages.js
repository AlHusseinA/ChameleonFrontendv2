import React from "react";
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


    if (error) return "An error has occurred.";
    if (!data) return "Loading...";


    return (
        <div className="card h-50 d-inline-block border border-primary mb-3" >
            
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
        </div>

    );

}




export default PreviousMessages;



