import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

import abouticonone from '../../assets/about/7c21bc9a-b2a9-4a1d-92c1-099c7e1aaaad.jpeg'
import abouticontwo from '../../assets/about/15a811a0-7b60-4cb7-b4b2-77d5c42c832b.jpeg'
import about from '../../assets/about/Untitled_1.1.2-3.jpg'
import Footer from '../footer/Footer';
function About() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section id='about'>
        <div className='head'>
          <div className='col'>
            <h3 className='title'>About Us</h3>
          </div>
          <div className='containerr'>
            <div className='col2'>
              {/* <img src={about}>
            </img> */}
              <h3><span className='rice' >Grains of Excellence</span>: Your Trusted Choice for Quality Rice Since <span className='rice' >2007!</span></h3>
              <h4>Since <span className='rice' >2007</span>, we've been dedicated to producing top-notch <span className='rice' >rice. </span><br /> <br />
                Our commitment to <span className='rice' >quality</span> has created a strong <span className='rice' >reputation</span> in the market.
                We focus on delivering the <span className='rice' >best grains</span>, building trust with our <span className='rice' >customers.</span>  <br /> <br />
                <span className='rice' >Our</span> journey is all about exceeding <span className='rice' >expectations</span> and setting
                new standards for <span className='rice' >excellence</span> in the rice industry.<br /><br />
                Fueling <span className='rice' >Growth</span> at Our Rice Mill: Picture this - every month, we're producing a <span className='rice' >massive 1000 tons</span> of <span className='rice' >top-notch rice.</span> It's not just about <span className='rice' >quantity;</span> it's about quality too.<br /><br /> Our <span className='rice' >mill</span> is a buzzing hub of <span className='rice' >productivity</span>, dedicated to delivering the <span className='rice' >finest rice.</span> Join us in this rice revolution, where <span className='rice' >every grain</span> tells a story of <span className='rice' >excellence!</span>
              </h4>
            </div>
            <div className='col3'>
              <div className='imgone'>
                <img src={abouticontwo}></img>
              </div>
              <div className='imgtwo'>
                <img src={abouticonone}></img>
              </div>
            </div>

          </div>
          <div className='container'>
            <div className='contact'>
              <div className='aone'>
                <h3>See more about variety of Rice from our mill</h3>
                <div className='btn_wrapper'>
                  <Link className='btn' to="/export" onClick={scrollToTop}>Exportation</Link>
                </div>
              </div>
            </div>
            <div className='categories'>
              <h3>Your rice needs, our priority: Connect with us</h3>
              <div className='btn_wrapper'>
                <Link className='btn' to="/contact" onClick={scrollToTop}>Contact</Link>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default About
