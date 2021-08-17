import React from 'react';
import { useHistory } from 'react-router';


const FAQs = () => (

    
    <div className="container">

        <br /><br /><br />
        <h1 className="text-primary" style={{ textAlign: 'center' }}>Frequently Asked Questions</h1><br />
        <br /><br />



        <ul class="list-group list-group-flush">
            <li class="list-group-item text-primary"><h6 style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>
                What is Chameleon?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    Chameleon is an AI powered conversational agent (ie chatbot). It is the software which the website you just used communicates with.                </p>
            </li>
            <li class="list-group-item">        <h6 class="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>Why is it called Chameleon?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    Because our future plans will enable Chameleon to mimic the symptoms of a variety of clinical presentations in many different patient profiles.</p></li>

            <li class="list-group-item">        <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>What Artificial Intelligence technology does Chameleon use?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    Chameleon uses a Google Cloud Platform (GCP) service called DialogFlow. DialogFlow uses advanced Natural Language Understanding models to detect intents (see below) of the user.                </p></li>

            <li class="list-group-item">        <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>What are intents?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    In the context of chatbot design, an intent is the meaning behind the user’s linguistic utterance. For example, the sentences “Do you have high blood pressure?” and “Were you ever diagnosed with hypertension?”, though different syntactically, are near identical semantically. They both trigger the same intent of ‘hypertension’. Both sentences let Chameleon know that you are asking about the exact same thing. They both will trigger the same response.
                </p></li>

            <li class="list-group-item">       <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>How many intents are programmed in Chameleon?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                   There over 200 intents programmed in Chameleon</p></li>

            <li class="list-group-item">        <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>What is a Standardised Patient (SP)?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    In medical education, it is common that medical schools will hire professional actors to play the role of patients with a specific set of symptoms. This process is standardised. Thus, several actors could be examined by different students, but all will present the same way if told to (for example, to ensure fairness in marking). Occasionally, the role of the standardised patient is played by other healthcare professional. The practice of hiring SPs is, however, quite costly.                 </p></li>

            <li class="list-group-item">        <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>What’s all this supposed to be doing?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    Chameleon digitises the role that a human actor plays. It is preprogramed to present the symptoms as a human would. At this stage, this work serves as a proof of principle and therefore not all design objectives are fulfilled at this point.</p></li>

            <li class="list-group-item">        <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>What is your objective from developing this software?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    Our main objective is to build an AI-driven pedagogical tool for medical students and working doctors. Chameleon allows the users to practice asking questions algorithmically and logically as they would do in real life clinical practice. It does so at very little financial cost.</p></li>

            <li class="list-group-item">        <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>Why is the interface designed this way?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    We followed a minimalist approach. The interaction with the agent is the main show and purpose behind using this tool. We have plans in the future to add a pane on the right to enable the users to order simulated lab tests, physical examinations, or medical imaging studies.</p></li>

            <li class="list-group-item">        <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>Why are there no instructions on how to use the interface?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    Following consultation with several doctors, we made a design decision to keep the focus on the chat window and the buttons' panel on the left-hand side of the screen. We believe medical students who have received some training in clinical interviewing will find it intuitive.</p></li>

            <li class="list-group-item">
                <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>How long will the questionnaire take?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    We estimate it will take around 5-6 minutes for native English speakers
                </p></li>

            <li class="list-group-item">        <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>Are you collecting any private data?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    No. We are not.
                </p></li>

            <li class="list-group-item">        <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>Will my data be shared with anyone?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    No. All the data generated from the questionnaire will be used for research purposes. It will be kept on a secure university of Aberdeen account until November 2021 only.                 </p></li>

            <li class="list-group-item">        <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>Do you have any future plans for Chameleon?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    At the moment, Chameleon is designed for research purposes. However, we have plans to expand the range of capabilities that it can offer.
                </p></li>


            <li class="list-group-item">        <h6 className="text-primary" style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>Is John Doe’s picture real?</h6>
                <p className="text-dark" style={{ textAlign: 'left' }}>
                    No. The picture you see was generated using an AI technique called SyleGAN. Visit: <a href="https://thispersondoesnotexist.com/" target="_blank">https://thispersondoesnotexist.com/</a> if you are interested.
                </p></li>

   <br /><br /><br /><br /><br /><br /><br />
   
        </ul>

    </div>

)
    


export default FAQs;
