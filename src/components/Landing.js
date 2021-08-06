import { useHistory } from 'react-router';
// import { Route } from 'react-router-dom';

import React from 'react'
 
export default function Landing() {
    let history = useHistory();

    function handleClick() {
      history.push("/chat");
    }

    return (
        <div className="container">
            

    <div style = {{ textAlign: 'center'}}>
    <h1>insert the ethical approval of the University of Aberdeen</h1>
    <p style = {{ textAlign: 'left'}}>PARTICIPANT INFORMATION SHEET 
Chameleon – A virtual standardised patient


Principal Investigator(s): Al-Hussein Abutaleb

Supervisor(s) [for students]: Dr. Bruno Yun

I am Al-Hussein Abutaleb, an MSc AI student at the University of Aberdeen Department of Computing Science.  I would like to invite you to consider participating in the research project “Chameleon – A virtual standardised patient”.  Below is some information about the project, to help you decide whether you would like to take part.

Participation in the research project is completely voluntary.  You can withdraw from the project at any time, without having to give a reason.

AIMS
The aim of the project is to design a pedagogical tool powered by Google’s AI driven DialogFlow platform. The primary users of this tool are healthcare students and working healthcare professionals. Our aim at this stage is to develop a working prototype that the users can use to improve their differential diagnosis skills. Chameleon, the name we chose for the prototype, will mimic the symptoms of a real patient. The healthcare professional can question Chameleon for the purpose of reaching a probable diagnosis. 
The primary outcome of this work is the completion of my MSc Artificial Intelligence project dissertation. Furthermore, I hope that this work will provide a framework for future researchers to further expand the capabilities of the chatbot and improve the realism of its linguistic behaviour. 

WHAT YOU WILL BE ASKED TO DO
We would like you to interact with Chameleon, the chatbot, in a manner like what you would do if it was a real patient. Afterwards, we will ask you to fill a short questionnaire. The questionnaire will focus on the performance of the software, your impressions, and any comments you would like to add. No personal information will be collected at any time. 
This expect to deploy this questionnaire for a period of 3-5 days between Monday 16th of August and Friday 20th August. We estimate that it will take no longer than 5 minutes to complete. Both Chameleon web interface and the questionnaire can be accessed from any computer with an internet connection. The website has not been optimised for mobile devices, however. 




RISKS
There should not be any risks to you from the experiment.  You are free to experiment with Chameleon without answering the questionnaire. You can also withdraw at any time from both the questionnaire and the interaction with Chameleon.

DATA MANAGEMENT AND STORAGE
The data collected will be stored on Google Forms and deleted at the end of November 2021. I will not record any personal information such as names or email addresses, nor will I be asking any personal information at any point. The information collected is purely about the performance of the tool, your perception of it, and general comments about performance. 
To the best of our knowledge, the nature of the questions will not allow any retrospective identification of the users. 


CONFIDENTIALITY AND ANONYMITY
The University’s Privacy Notice for Research Participants is available here
Raw data and the identity of participants will not be released to anyone outside the research team.  The data you provide will be analysed and may be used in publications, dissertations, reports, or presentations derived from the research project, but this will be done in such a way that your identity is not disclosed. We may use quotes from the comments, or create word clouds from the comments of all users in the final dissertation. No names or attribution of any kind will be made with any quotes used. 

CONSENT
If you agree to take part in the research, you will be asked to indicate your consent by.

SPONSORS
There are no sponsors for this research.

Thank you for considering taking part in this research.


If you have any questions about this research please contact [me/us]:
Al-Hussein Abutaleb			a.abutaleb.20@abdn.ac.uk
</p>
    <div class="col-10">
        <button type="submit" class="btn btn-primary btn-lg" onClick={handleClick}>Agree and begin experiment</button>
      </div>
</div>
        </div>
    )
}



