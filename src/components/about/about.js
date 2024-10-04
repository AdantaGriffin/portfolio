import React from 'react';
import { Link } from 'react-router-dom';
import './about.css'; 
/*import './about-light.css';*/
function About(){
    return (
        <>
            <div className='about'>
                <div className='about-img'></div>
                <blockquote className='about-text'>
                    <h1 className='about-heading'>
                        hi.
                    </h1>
                    <p className='about-info'>
                         My name is Adanta Griffin and I am a web developer based in Brooklyn, NYC. When I'm not infront of a screen, I really enjoy my time spent maintaining my physical well being, cooking and then eating and watching my dogs play.
                    </p>
                </blockquote>
            </div>
            <div className='next'>
                <Link to='/about/dogs'>NEXT</Link>
            </div>
        </>    
    )
};

export default About;