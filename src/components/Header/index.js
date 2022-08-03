import React from 'react';
import '../../index.css'
import {BsArrowDownCircle} from 'react-icons/bs'


function Header (props) {
    // function hide () {
        var section = document.getElementById("header"); 
    //     if (section.style.display === "none") {
    //         section.style.display = "block";
    //       } else {
    //         section.style.display = "none";
    //       }
    //     };


        return (
            <header id="header" className="masthead">
            <p className="masthead-intro">Hi, I&rsquo;m</p> 
            <h1 className="masthead-heading">V!</h1>
            <a href="#abtSec">
                <BsArrowDownCircle className='headerIcon' onClick={() => (section === false)}/> </a>
        </header>
        
         )  

};


export default Header;