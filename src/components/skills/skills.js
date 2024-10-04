import React from 'react';
import { NavLink } from 'react-router-dom';
import './skills.css';
function Skills(){
    return (
        <>
            <h1>Skills</h1>
            <div className='skills-container'>
                <div className='skill-block'>
                    <img src='/images/html-5.png' className='skill-icon'/>
                    <p className='skill-info'>HTML5</p>
                    <NavLink to='/skills/HTML' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/css-3.png' className='skill-icon'/>
                    <p className='skill-info'>CSS3</p>
                    <NavLink to='/skills/CSS'  className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/figma.png' className='skill-icon'/>
                    <p className='skill-info'>FIGMA</p>
                    <NavLink to='/skills/Figma' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/ui-ux.png' className='skill-icon'/>
                    <p className='skill-info'>UX/UI</p>
                    <NavLink to='/skills/UXUI' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/github.png' className='skill-icon'/>
                    <p className='skill-info'>GITHUB</p>
                    <NavLink to='/skills/GitHub' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/git-bash.png' className='skill-icon'/>
                    <p className='skill-info'>GITBASH</p>
                    <NavLink to='/skills/GitBash' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/java-script.png' className='skill-icon'/>
                    <p className='skill-info'>JAVASCRIPT</p>
                    <NavLink to='/skills/JavaScript' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/nodejs.png' className='skill-icon'/>
                    <p className='skill-info'>NODE.js</p>
                    <NavLink to='/skills/NODEjs' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/markdown.png' className='skill-icon'/>
                    <p className='skill-info'>MARKDOWN</p>
                    <NavLink to='/skills/Markdown' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/mocha.png' className='skill-icon'/>
                    <p className='skill-info'>MOCHA</p>
                    <NavLink to='/skills/Mocha' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/chai.png' className='skill-icon'/>
                    <p className='skill-info'>CHAI</p>
                    <NavLink to='/skills/Chai' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/sinon.png' className='skill-icon'/>
                    <p className='skill-info'>SINON.js</p>
                    <NavLink to='/skills/SINONjs' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/react.png' className='skill-icon'/>
                    <p className='skill-info'>REACT</p>
                    <NavLink to='/skills/React' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/jest.png' className='skill-icon'/>
                    <p className='skill-info'>JEST</p>
                    <NavLink to='/skills/Jest' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/enzyme.webp' className='skill-icon'/>
                    <p className='skill-info'>ENZYME</p>
                    <NavLink to='/skills/Enzyme' className='skill-info'>learn more</NavLink>
                </div>
                <div className='skill-block'>
                    <img src='/images/redux.png' className='skill-icon'/>
                    <p className='skill-info'>REDUX</p>
                    <NavLink to='/skills/Redux' className='skill-info'>learn more</NavLink>
                </div>
            </div>
        </>
    )
};

export default Skills;