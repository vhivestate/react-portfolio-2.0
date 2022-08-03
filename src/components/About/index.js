import React from 'react';
import Photo from '../../assets/photo/portfolio.jpg'
import '../../index.css'

function About() {

  return (
    <section className='aboutSec'>
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
  )
}

export default About