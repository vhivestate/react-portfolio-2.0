import React from 'react';
import '../../index.css'
import {BsArrowDownCircle} from 'react-icons/bs'

function Header () {

 
        return (
            <header className="masthead">
            <p className="masthead-intro">Hi, I&rsquo;m</p> 
            <h1 className="masthead-heading">V!</h1>
            <a href="#portfolio">
                <BsArrowDownCircle className='headerIcon'/> </a>
            {/* <div>
            <a href="#portfolio">
                <BsArrowDownCircle className='headerIcon'/> </a>
            </div> */}
        </header>
        
         )

}

export default Header;