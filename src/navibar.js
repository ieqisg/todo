import React from "react";
import { useState,useEffect } from "react";
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";



function NaviBar() {


    return(
        <nav className="navbar">
            <ul style={{display:'flex', gap:'2rem',backgroundColor:'black', padding:'2%', }}>
                <li><Link to='/App'>Home</Link></li>
                <li><Link to='/pages/Completed'>Completed Tasks</Link></li>
                <li><Link to='/pages/Deadlines'>Set Deadline</Link></li>
            </ul>
        </nav>
        
    )

}

export default NaviBar