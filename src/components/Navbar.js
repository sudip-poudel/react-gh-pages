import "./NavbarStyles.css";
import React,{useState} from "react";  
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = ()=>{
    const [click, setClick]= useState(false);
    const handleClick = ()=>setClick(!click);
    return(
        <div className="header">
            <Link to="/">
                Portfolio
            </Link>
            <ul className={!click?"nav-menu":"nav-menu active"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {(click)?(<FaTimes style={{color:"white"}}/>):<FaBars style={{color:"white"}}/>}
                
                

            </div>
        </div>
    )
}

export default Navbar