/*import './header-light.css';*/
import './header.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const apiKey = '29cea5460e794d7897761918240109';
const baseUrl = 'http://api.weatherapi.com/v1';
const requestParams = `?api_key=${apiKey}`;

const getCurrentWeather = async () => {
    const currentWeather = `/current.json`;
    const requestParams = `?key=${apiKey}&q=11215`;
    const urlToFetch = `${baseUrl}${currentWeather}${requestParams}`;
  
    try{
      const response = await fetch(urlToFetch);
      if(response.ok){
        const jsonResponse = await response.json();
        //console.log(jsonResponse.location.name)
        const temp = jsonResponse.current.temp_f;
        const timeline = document.getElementById('weather');
        timeline.innerHTML = `${day} ${time}  ${Math.floor(temp)}°`;
        const city = jsonResponse.location.name;
        const state = jsonResponse.location.region;
      }
    }catch(error){
      console.log(error)
    }
};
getCurrentWeather()
const day = new Date().toDateString();
const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

//console.log(day)


function Header(){
    return (
        <>
            <div>
                <header>
                <nav className='nav1'>
                    <div className='header-logo'>
                        <Link to='/'>AGC</Link>
                    </div>
                    <ul className='ul1'>
                        <li className='li1'>
                            <NavLink to='/about'>about</NavLink>
                        </li>
                        <li className='li1'>
                            <NavLink to='/skills'>skills</NavLink>
                        </li>
                        <li className='li1'>
                            <NavLink to='/projects'>projects</NavLink>
                        </li>
                        <li className='li1'>
                            <NavLink to='/resume'>resume</NavLink>
                        </li>
                        <li className='li1'
                            id='connect'>
                            connect
                            <ul className='connect-icons'>
                                <li className='icon-links'>LinkedIn</li>
                                <li className='icon-links'>GitHub</li>
                                <li className='icon-links'>Instagram</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                </header>
                <nav className='nav2'>
                    <div id='weather'>

                    </div>
                    <ul className='ul2'>
                        <li>
                            <NavLink className='li2' to='/about'>about</NavLink>
                        </li>
                        <li>
                            <NavLink className='li2' to='/skills'>skills</NavLink>
                        </li>
                        <li>
                            <NavLink className='li2' to='/projects'>projects</NavLink>
                        </li>
                        <li>
                            <NavLink className='li2' to='/resume'>resume</NavLink>
                        </li>
                        <li className='li2'
                            id='connect'>
                            connect
                            <ul className='connect-icons'>
                                    <li className='icon-links'>LinkedIn</li>
                                    <li className='icon-links'>GitHub</li>
                                    <li className='icon-links'>Instagram</li>
                                </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
};

export default Header