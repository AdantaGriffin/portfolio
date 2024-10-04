import React from 'react';
import { Link } from 'react-router-dom';
import './me.css';
/*import './me-light.css';*/
function Me(){
    return(
        <>
         <div className='me1'>
            <p className='me-text'>
               Is it fair to say that everyone's first love is food? Well mine was and so was it my first passion as well. Since a young age I would always love to be involved with my mothers cooking and when I was allowed to cook for myself, the passion only grew.
            </p>
            <img src='/images/IMG_6411.PNG' height='1200px'width='900px'/>
         </div>
         <div className='me-gallery'>
            <img className='me-pic' src='' height='150px' width='300px' alt=''/>
            <img className='me-pic' src='' height='150px' width='300px' alt=''/>
            <img className='me-pic' src='' height='150px' width='300px' alt=''/>
            <img className='me-pic' src='' height='150px' width='300px' alt=''/>
            <img className='me-pic' src='' height='150px' width='300px' alt=''/>
         </div>
         <div className='next'>
            <Link to='/about/dogs'>BACK</Link>
         </div>
        </>
    )
};

export default Me;