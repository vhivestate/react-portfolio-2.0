import React from 'react';
import Photo from '../../assets/photo/portfolio.jpg'
import '../../index.css'
import {BsArrowDownCircle} from 'react-icons/bs'



function About() {

  return (
  <>
    <header id="header" className="hero">
    <p className="hero-intro">Hello, I&rsquo;m</p> 
            <h1 className="hero-heading">V!</h1>
            <a href="#intro">
                <BsArrowDownCircle className='headerIcon'/> </a>
        </header>
        <h1 id='intro'>Meet the Developer</h1>
    <section id="abtSec" className='aboutSec'>
            <div className='headshot'>
            <img src={Photo} alt='V headshot'></img>
            </div>
      <div id='about' className='bio'>
            <p>
                My name is Valeria Garcia. I'm a Full Stack Developer based out of Salt Lake City, UT. Currently attending the University of Utah. My current role is Senior Liability Specialist for FedEx.
            </p>
            </div>
    </section>
  </>

  )
}

export default About