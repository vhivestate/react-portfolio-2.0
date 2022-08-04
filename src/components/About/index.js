import React from 'react';
import Photo from '../../assets/photo/portfolio.jpg'
import '../../index.css'
import {BsArrowDownCircle} from 'react-icons/bs'



function About() {

  return (
  <>
    <header id="header" className="hero">
    <p className="hero-intro">Hi, I&rsquo;m</p> 
            <h1 className="hero-heading">V!</h1>
            <a href="#abtSec">
                <BsArrowDownCircle className='headerIcon'/> </a>
        </header>
       
    <section id="abtSec" className='aboutSec'>
            <div className='headshot'>
            <img src={Photo} alt='V headshot'></img>
            </div>
      <div id='about' className='bio'>
        <h3>About Me</h3>
            <p>
                Full Stack Developer that's passionate about computer science.  
                Based out of Salt Lake City, UT and currently attending The University of Utah. 
                I am a Senior Liability Specialist for FedEx where I determine liabiliy on loss and damage claims. 
                Outside of work and school I enjoy snowboarding and creating art.
            </p>
            </div>
    </section>
  </>

  )
}

export default About