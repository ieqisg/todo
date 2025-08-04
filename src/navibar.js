import React from "react";
import { useState,useEffect } from "react";
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";


function NaviBar() {


    return(
        <nav className="navbar">
            <ul style={{display:'flex', gap:'2rem', padding:'1%', marginBottom:'0px', listStyle:'none'  }}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/pages/Completed'>Completed Tasks</NavLink></li>
                <li><NavLink to='/pages/Deadlines'>Set Deadline</NavLink></li>
            </ul>
        </nav>
        
    )

}

export default NaviBar