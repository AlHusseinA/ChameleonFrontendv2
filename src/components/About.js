import React from 'react';



const About = () => (
    <div className="container">
    <div style={{ textAlign: 'center' }}>
                        <br /><br /><h1>Chameleon – A virtual standardised patient</h1><br /><br />
                <p style={{ textAlign: 'left' }}>
                    <h5>Principal Investigator: Al-Hussein Abutaleb</h5>
                    <h5>Supervisor: Dr. Bruno Yun</h5><br />
                    <p style={{ textAlign: 'left' }}>
                        I am Al-Hussein Abutaleb, an MSc AI student at the University of Aberdeen Department of Computing Science.
                        I would like to invite you to consider participating in the research project “Chameleon – A virtual standardised patient”.
                        Below is some information about the project, to help you decide whether you would like to take part.
                    </p>
                    <p style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>Participation in the research project is completely voluntary.  You can withdraw from the project at any time, without having to give a reason.</p><br />
                    <h6 style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>AIMS</h6>
                    <p style={{ textAlign: 'left' }}>
                        We created a pedagogical tool to help healthcare students and working healthcare professionals to improve their differential diagnosis skills by probing a chatbot that simulates the symptoms of a real patient.
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        The goal of this experiment it to collect conversational data to improve the performance of the developed chatbot and to collect feedback from participants about the chatbot through a questionnaire.
                    </p><br />
                    <h6 style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>WHAT YOU WILL BE ASKED TO DO</h6>
                    <p style={{ textAlign: 'left' }}>
                        We would like you to interact with Chameleon, the chatbot, in a manner like what you would do if it was a real patient. Afterwards, we will ask you to fill a short questionnaire. The questionnaire will focus on the performance of the software, your impressions, and any comments you would like to add. No personal information will be collected at any time.
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        We expect to deploy this questionnaire for a period of 3-5 days between Monday 16th of August and Friday 20th August. We estimate that it will take no longer than 5 minutes to complete. Both Chameleon web interface and the questionnaire can be accessed from any computer with an internet connection. The website has not been optimised for mobile devices, however.
                    </p><br />
                    <h6 style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>RISKS</h6>
                    <p style={{ textAlign: 'left' }}>
                        There should not be any risks to you from the experiment.  You are free to experiment with Chameleon without answering the questionnaire. You can also withdraw at any time from both the questionnaire and the interaction with Chameleon.
                    </p><br />
                    <h6 style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>DATA MANAGEMENT AND STORAGE</h6>
                    <p style={{ textAlign: 'left' }}>
                        The data collected will be stored on Google Forms and deleted at the end of November 2021. I will not record any personal information such as names or email addresses, nor will I be asking any personal information at any point. The information collected is purely about the performance of the tool, your perception of it, and general comments about performance.
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        To the best of our knowledge, the nature of the questions will not allow any retrospective identification of the users.
                    </p><br />
                    <h6 style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>CONFIDENTIALITY AND ANONYMITY</h6>
                    <p style={{ textAlign: 'left' }}>
                        The University’s Privacy Notice for Research Participants is available <a href="https://www.abdn.ac.uk/about/privacy/research-participants-938.php" target="_blank">here</a>
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        Raw data and the identity of participants will not be released to anyone outside the research team.  The data you provide will be analysed and may be used in publications, dissertations, reports, or presentations derived from the research project, but this will be done in such a way that your identity is not disclosed. We may use quotes from the comments, or create word clouds from the comments of all users in the final dissertation. No names or attribution of any kind will be made with any quotes used.
                    </p><br />
                    <h6 style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>CONSENT</h6>
                    <p style={{ textAlign: 'left' }}>
                        If you agree to take part in the research, you will be asked to indicate your consent by clicking the button below.
                    </p><br />

                    <h6 style={{ textAlign: 'left' }, { fontWeight: 'bold' }}>SPONSORS</h6>
                    <p style={{ textAlign: 'left' }}>
                        There are no sponsors for this research.
                    </p><br /><br />
                    {/* <hr class="rounded"> */}

                    <p style={{ textAlign: 'left' }}>
                        Thank you for considering taking part in this research.
                    </p><br /><br />
                    <hr /><hr />
                    <p style={{ textAlign: 'left' }}>If you have any questions about this research please contact me:</p>
                    <p style={{ textAlign: 'left' }}>
                        Al-Hussein Abutaleb:         <a href="a.abutaleb.20@abdn.ac.uk">a.abutaleb.20@abdn.ac.uk</a>
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        For any queries regarding ethical concerns you may contact the Convener of the Physical Sciences & Engineering Ethics Board at the University of Aberdeen: <br />
                        Email:           <a href="copsethics@abdn.ac.uk">copsethics@abdn.ac.uk</a></p>
                    <br />

                    <p style={{ textAlign: 'left' }}>
                    This research project was approved by the Physical Sciences and Engineering Ethics Board on XXXX..
                    </p><br />
                </p>
    </div>
    </div>
)

export default About;
