import React from "react";
import logo from "./img.png"
import './index.css';

export default function Navbar(){
    return(
    <nav>
    <img src = {logo} alt= "airbnb logo" className="nav-logo" />
    </nav>
    )
}