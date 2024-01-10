import React from 'react';
import './About.css';
import about from '../../assets/about/Untitled_1.1.2-3.jpg'
function About() {
  return (
    <>
    <section id='about'>
        <div className='head'>
           <div className='col'>
           <h3 className='title'>About Us</h3>
           </div>
           <div className='col2'>
            {/* <img src={about}>
            </img> */}

           </div>
        </div>
    </section>
    </>
  )
}

export default About
