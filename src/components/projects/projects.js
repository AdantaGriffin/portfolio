import React from 'react';
import { NavLink } from 'react-router-dom';
import './projects.css';
/*import './projects-light.css';*/
function Projects(){
    return (
        <>
            <div className='projects-header'>
                <h1 className='projects-title'>Recent Projects.</h1>
            </div>
            <div className='projects-container'>
                <div className='projects'>
                    <img src='./images/formAStoryImg.png' alt=''/>
                    <div className='project-info'>
                        <p>Form A Story</p>
                        <p>Fill in the blanks to see where the story goes!</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/pianoPlayerImg.png' alt=''/>
                    <div className='project-info'>
                        <p>Piano Keys</p>
                        <p>No piano, no worries. Play happy birthday at your next event, instructed from your closest device!</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/magic8Ball.png' alt=''/>
                    <div className='project-info'>
                        <p>Magic 8 Ball</p>
                        <p>Hopes and wishes are for noobs. Get the answers the universe holds today!</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/NumberGuesserImg.png' alt=''/>
                    <div className='project-info'>
                        <p>Guess Closer</p>
                        <p>Can you out wit the software, try your luck guessing the next number now!</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/lepisGoldImg.png' alt=''/>
                    <div className='project-info'>
                        <p>Lepi's Gold</p>
                        <p>Lepi has lost his gold, can you help Lepi retieve his lost pot? </p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/filmFinder.png' alt=''/>
                    <div className='project-info'>
                        <p>Film Finder</p>
                        <p>Select a genre and click play, your random movie is on its way!</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/safariImg.png' alt=''/>
                    <div className='project-info'>
                        <p>Safari Super Facts</p>
                        <p>Super Facts with JSX!</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/wordieImg.png' alt=''/>
                    <div className='project-info'>
                        <p>Wordie</p>
                        <p>Fetch API with WORDIE!</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/authorizedImg.png' alt=''/>
                    <div className='project-info'>
                        <p>Riddler</p>
                        <p>Can you solve the riddle to gain authorization?</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/kanye-news.png' alt=''/>
                    <div className='project-info'>
                        <p>Kanye Says</p>
                        <p>Just in Kanye tweets again!</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/homebound.png' alt=''/>
                    <div className='project-info'>
                        <p>Homebound</p>
                        <p>find local pets now!</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/appointment-scheduler.png' alt=''/>
                    <div className='project-info'>
                        <p>Appointment Scheduler</p>
                        <p>Using react to pass state</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='./images/flashcards.png' alt=''/>
                    <div className='project-info'>
                        <p>Go Cards</p>
                        <p>Study in a flash with Go-Cards</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='' alt=''/>
                    <div className='project-info'>
                        <p>name</p>
                        <p>description</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
                <div className='projects'>
                    <img src='' alt=''/>
                    <div className='project-info'>
                        <p>name</p>
                        <p>description</p>
                        <NavLink to='#'>check out</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Projects;