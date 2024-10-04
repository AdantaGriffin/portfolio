import React from 'react';
import './resume.css';

function Resume(){
    return(
        <>
            <div className='resume'>
                <div className='header'>
                    <div className='header-left'></div>
                    <div className='header-right'>
                        <div className='header-title'>
                            <h1 className='resume-header'>Adanta Griffin</h1>
                            <h2>Front End Developer</h2>
                        </div>
                        <hr/>
                        <p>An aspiring front-end web developer excited to contribute my skills and enthusiasm to a dynamic team. Committed to keeping current with the latest web development practices and offering responsive and engaging web solutions to clients.</p>
                    </div>
                </div>

                <div className='resume-contacts'>
                    <div className='resume-phone'>
                        <img width='20px' src='/images/phone.png' alt=''/>
                        <p>718.820.2506</p>
                    </div>
                    <div className='resume-email'>
                        <img width='20px' src='/images/envelope.png' alt=''/>
                        <p>griffinadanta90@gmail.com</p>
                    </div>
                    <div className='resume-location'>
                        <img width='20px' src='/images/gps.png' alt=''/>
                        <p>Brooklyn, NYC</p>
                    </div>
                </div>

                <div className='resume-main'>
                    <div className='row-one'>
                        <div className='resume-skills'>
                            <h3>Skills</h3>
                            <ul className='resume-list'>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>Figma</li>
                                <li>UX/UI design</li>
                                <li>GitBash</li>
                                <li>GitHub</li>
                                <li>JavaScript</li>
                                <li>Node.js</li>
                                <li>Markdown</li>
                                <li>Mocha Test Framework</li>
                                <li>Chai Assertion Library</li>
                                <li>Sinon spies</li>
                                <li>React</li>
                                <li>Jest</li>
                                <li>Enzyme</li>
                                <li>Redux</li>
                            </ul>
                        </div>
                        <div className='resume-experience'>
                            <h3>Experience</h3>
                            <blockquote>
                                <h4>Sotheby's International Madison Estate's (2015 - current)</h4>
                                <h5>Real Estate Sales</h5>
                                <ul className='resume-list'>
                                    <li>
                                        Helped clients make informed decisions inregards to buying, selling and leasing real estate.
                                    </li>
                                    <li>
                                        Provided expert advice based on close review of property taxes, zoning, comparble market values/growth, condition and more..
                                    </li>
                                    <li>
                                        Maintained relationships with clients, mortgage companies, colleagues, home inspectors, mortgage appraisers and real estate attorneys.
                                    </li>
                                    <li>
                                        Analyzed market trends.
                                    </li>
                                    <li>
                                        Drove property sales by online arketing, open houses, MLS services, client retention.
                                    </li>
                                    <li>
                                        Successfully closed 10 million plus in real estate sales.
                                    </li>
                                </ul>
                            </blockquote>
                            <hr></hr>
                            <blockquote>
                                <h4>Precision Security and Investigations (2020 - 2021)</h4>
                                <h5>NYS Lisenced Guard</h5>
                                <ul className='resume-list'>
                                    <li>Conducted on foot patrols of facility parameters</li>
                                    <li>Asses and reported potential loss situations on sites</li>
                                    <li>Investigated and reported theft and criminal offenses</li>
                                    <li>Reported and corrected all breaches of safety regulations</li>
                                    <li>Protected client assets, visitors and employee property</li>
                                    <li>Kept records in Command Log Book</li>

                                </ul>
                            </blockquote>
                            <hr></hr>
                            <blockquote>
                                <h4>Wash Club  (2013 - 2015)</h4>
                                <h5>Commercial Truck Operator</h5>
                                <ul className='resume-list'>
                                    <li>Navigated commercial vehicles throught NYC</li>
                                    <li>Utilized company logistics program</li>
                                    <li>Interacted with clients</li>
                                    <li>Trained new employees</li>

                                </ul>
                            </blockquote>
                            <hr></hr>
                            <blockquote>
                                <h4>New York City Parks and Recreation  (2005 - 2012)</h4>
                                <h5>Parks Associate</h5>
                                <ul className='resume-list'>
                                    <li>Counselor of children 6 - 13 years of age</li>
                                    <li>Resposible for group of 30 children at a time</li>
                                    <li>Prepared daily activities for summer camp and afterschool programs</li>
                                    <li>Clerical work and trained new employees</li>
                                </ul>
                            </blockquote>
                        </div>
                    </div>
                    <hr/>
                    <div className='row-two'>
                        <div className='languages'>
                            <h3>Foreign Languages</h3>
                            <ul className='resume-list'>
                                <li>English *****</li>
                                <li>French ***</li>
                                <li>Spanish **</li>
                            </ul>
                        </div>
                        <div className='education'>
                            <h3>Education</h3>
                                <h4>Code Academy (2023 - current)</h4>
                                <ul className='resume-list'>
                                    <li>HTML 5</li>
                                    <li>CSS 3</li>
                                    <li>JAVASCRIPT</li>
                                    <li>FRONT END</li>
                                </ul>
                                <br/>
                                <h4>New York Real Estate Institute (2015 - 2015)</h4>
                                <ul className='resume-list'>
                                    <li>NYS Real Estate License</li>
                                </ul>
                                <br/>
                                <h4>Mohawk Valley Community College (2009 - 2011)</h4>
                                <ul className='resume-list'>
                                    <li>Criminal Justice</li>
                                </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className='row-three'>
                        <div className='certifications'>
                            <h3>Certifications</h3>
                            <ul className='resume-list'>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>JavaScript</li>
                                <li>Front End</li>
                            </ul>
                        </div>
                        <div></div>
                    </div>
                    <hr/>
                </div>
            </div>
        </>
    )
};

export default Resume;