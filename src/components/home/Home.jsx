import React from 'react'
import './Home.css';
import { Link } from 'react-scroll';
import BannerImage from '../../assets/banner/ba01c2ad-b832-4a25-a16d-24f8225c8e6e.jpeg';
function Home() {
  return (
    <>
      <section id='home'>
        <div className='banner_image'>
         <div className='container'>
            <div className='banner_outer'>
                <div className='col'>
                <h3 className='title'>
                   Leading <span className='rice' >Rice</span> Manufacturer and Exporter
                </h3>
                <h4>
                Providing Quality Grains to Your Doorstep, Your <span className='rice' >Trusted</span> Rice <span className='rice' >Provider</span>, Anytime, Anywhere!
                </h4>
                <div className='btn_wrapper'>
                    <Link className='btn' to="/">Discover More</Link>
                </div>
            </div>
            <div className='col'>
                <div className='sub_banner_image'>
                    <img src={BannerImage}></img>
                </div>
                <div className='banner_style_1'>

                </div>
            </div>
            </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default Home
