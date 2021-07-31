import React from "react";
import useSWR from "swr";
// import process from "process";



// debugger


// dummy = 1;
const fetcher = url => fetch(url).then(res => res.json());



const PreviousMessages = ({conversationUuid}) => {
    const BASE_URL = process.env.REACT_APP_API_ENDPOINT 
    const url = `${BASE_URL}/messages/${conversationUuid}`

    const { data, error } = useSWR(
        url,
        fetcher, { refreshInterval: 1000 }
    );


    if (error) return "An error has occurred.";
    if (!data) return "Loading...";


    return (
        <div className="card">
            <ul class="list-group list-group-flush">
                {
                    data.map((item) => (
                        (
                            item.actor === 'Chameleon' ? <li class="list-group-item list-group-item-action list-group-item-primary">{item.actor}-{item.message}</li> : <li class="list-group-item list-group-item-action list-group-item-success">{item.actor};{item.message}</li>
                        )
                    )

                    )
                }

            </ul>
        </div>

    );

}




export default PreviousMessages;



