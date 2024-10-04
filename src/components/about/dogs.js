import React from 'react';
import { Link } from 'react-router-dom';
import './dogs.css';
/*import './dogs-light.css';*/

function Dogs(){
    return (
        <>
            <p className='dogs-text'>Being a dog dad changed my life. Aside from the added responsibilities, they enabled me to lose 50 pounds and keep it off. Watching them play and love each other are highlights in my days. As we get older life tends to get complicated so being able to watch my dogs be young and free in a safe space brings me a sense of joy as I vicariously live through them.</p>
            <div className='dogs-gallery'>
                <img src='/images/IMG_6402.PNG' width='400px' alt=''/>
                <img src='/images/IMG_6403.PNG' width='400px' alt=''/>
                <img src='/images/IMG_6404.PNG' width='400px' alt=''/>
                <img src='/images/IMG_6410.PNG' width='400px' alt=''/>
                <img src='/images/IMG_6400.PNG' width='400px' alt=''/>
            </div>
            <div className='next'>
                <Link to='/about'>BACK</Link>
                <Link to='/about/dogs/me'>NEXT</Link>
            </div>
        </>
    )
};

export default Dogs;