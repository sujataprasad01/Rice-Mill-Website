import React from 'react';
import './About.css';
import { Link } from 'react-scroll';

import abouticonone from '../../assets/about/7c21bc9a-b2a9-4a1d-92c1-099c7e1aaaad.jpeg'
import abouticontwo from '../../assets/about/15a811a0-7b60-4cb7-b4b2-77d5c42c832b.jpeg'
import about from '../../assets/about/Untitled_1.1.2-3.jpg'
import Footer from '../footer/Footer';
function About() {
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
              <h4>Since 2007, we've been dedicated to producing top-notch rice. <br /> <br />
                Our commitment to quality has created a strong reputation in the market.
                We focus on delivering the best grains, building trust with our customers.  <br /> <br />
                Our journey is all about exceeding expectations and setting
                new standards for excellence in the rice industry.<br /><br />
                Fueling Growth at Our Rice Mill: Picture this - every month, we're producing a massive 1000 tons of top-notch rice. It's not just about quantity; it's about quality too.<br /><br /> Our mill is a buzzing hub of productivity, dedicated to delivering the finest rice. Join us in this rice revolution, where every grain tells a story of excellence!
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
                <h3>Your Rice Needs, Our Priority: Connect with Us</h3>
                <div className='btn_wrapper'>
                  <Link className='btn' to="/contact">Contact</Link>
                </div>
              </div>
            </div>
            <div className='categories'>
              <h3>Your Rice Needs, Our Priority: Connect with Us</h3>
              <div className='btn_wrapper'>
                <Link className='btn' to="/contact">Exportation</Link>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default About
