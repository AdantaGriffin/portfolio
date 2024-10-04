import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import './root.css';
import Header from "../header/header";



function Root(){
    return(
        <>
            <div>
                <Header/>

                <Outlet />
            </div>
        </>
    )    
};

export default Root;