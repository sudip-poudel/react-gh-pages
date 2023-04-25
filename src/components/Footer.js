import "./FooterStyle.css";
import React from 'react';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillFacebook ,AiFillLinkedin,AiFillTwitterSquare, AiFillYoutube , AiOutlineCopyright } from "react-icons/ai";

function Footer() {
  return (
    <>
    <div className="container2">
        <footer>
            <div className="links">
            <Link to="/">Home</Link>
            <span className="dot"></span>
            <Link to="/blog">My Blog</Link>
            <span className="dot"></span>
            <Link to="/projects">My Works</Link>
            <span className="dot"></span>
            <Link to="/">My Clients</Link>
            <span className="dot"></span>
            <Link to="/contact">Contact me</Link>
            </div>

            <div className="icons">
            <IconContext.Provider value={{ color: "green", className: "global-class-name" }}>
            <Link className="socials" > <AiFillFacebook size={30} radius={50} color="#4267B2"/> </Link>
            <Link className="socials" >  <AiFillLinkedin size={30} radius={50} color="#0072b1"/> </Link>
            <Link className="socials" >  <AiFillTwitterSquare size={30} radius={50} color="#1DA1F2"/> </Link>
            <Link className="socials" >  <AiFillYoutube size={30} radius={50} color="red"/> </Link>
            </IconContext.Provider>
            </div>
            <hr className="horizontalLine"/>

            {/* <div className="copyright"> */}
                <p className="copyright">
                Copyright 
                <AiOutlineCopyright color="grey" size={15} /> 2022 Sudip Poudel
                </p>
            {/* </div> */}
        </footer>

    </div>
    </>
  )
}

export default Footer