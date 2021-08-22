import { useHistory } from 'react-router';
// import { Route } from 'react-router-dom';
// import './index.css';
import React from 'react'

export default function Landing() {

        // when the user clicks the user consent button, the "/chat" page is rendered (and inside it the Chat.js, Header.Js, Navebar.js, and Buttons.js)
    let history = useHistory();
    function handleClick() {
        history.push("/chat");
    }

    return (
        <div className="container">

            <br /><br /><br />
            <h1 className="text-primary text-capitalize" style={{ textAlign: 'center' }}>Chameleon – A virtual standardised patient</h1><br />




            <ul class="list-group list-group-flush">
                <li class="list-group-item text-danger"><h3 style={{ textAlign: 'center' }, { fontWeight: 'bold' }}>
                    Consent form for participation in the research project (Chameleon – A virtual Standardized Patient).</h3>
                </li>
                <li class="list-group-item">
                    <p className="font-weight-bold" style={{ fontWeight: 'bold' }}>
                        Participation in the research project is completely voluntary.  You can withdraw from the project at any time, without having to give a reason.
                        <u>Please read the statements below and click the blue button to confirm you have read and understood the statements and upon doing so agree to participate in the project:</u>
                    </p>

                    <div className="container">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">

                            </li>
                            <li class="list-group-item">
                                <p class="consent" style={{ textAlign: 'left' }}>
                                    <li>I confirm that the research project (<b>Chameleon – A virtual Standardized Patient</b>) has been explained to me. I have had the opportunity to ask questions about the project and have had these answered satisfactorily.</li>
                                </p>
                            </li>

                            <li class="list-group-item">
                                <p class="consent" style={{ textAlign: 'left' }}>
                                    <li>I consent to the material I contribute being used to generate insights for the research project (<b>Chameleon – A virtual Standardized Patient</b>).</li>
                                </p>
                            </li>
                            <li class="list-group-item">
                                <p class="consent" style={{ textAlign: 'left' }}>
                                    <li>I understand that my participation in this research is voluntary and that I may withdraw from the research at any time (until the point of data analysis) without providing a reason.</li>
                                </p>
                            </li>
                            <li class="list-group-item">
                                <p class="consent" style={{ textAlign: 'left' }}>
                                    <li>I consent to allow the <u>fully anonymised </u> data to be used for future publications and other scholarly means of disseminating the findings from the research project.</li>
                                </p>
                            </li>
                            <li class="list-group-item">
                                <p class="consent" style={{ textAlign: 'left' }}>
                                    <li>I understand that the information/data acquired will be securely stored by researchers, but that appropriately anonymised data may in future be made available to others for research purposes.   I understand that the University may publish appropriately anonymised data in its research repository for verification purposes and to make it accessible to researchers and other research users.</li>
                                </p>
                            </li>
                            <li class="list-group-item align-self-center">
                                <br /><button type="submit" class="btn btn-primary btn-lg" onClick={handleClick}> 	I confirm that I have read and understood the above statements (click here).</button><br />

                            </li>
                            <br /><br /><br /><br />



                        </ul>
                    </div>

                </li>
            </ul>



        </div>
    )
}



