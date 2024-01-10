import React from 'react'
import './Home.css';
import { Link } from 'react-scroll';
import BannerImage from '../../assets/banner/ba01c2ad-b832-4a25-a16d-24f8225c8e6e.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved,faChartArea } from '@fortawesome/free-solid-svg-icons';
function Home() {

  const faChatIcon = <FontAwesomeIcon icon={faChartLine} />
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />



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
                <p>
                Providing Quality Grains to Your Doorstep, <br/>Your <span className='rice' >Trusted</span> Rice <span className='rice' >Provider</span>, Anytime, Anywhere!
                </p>
                <div className='btn_wrapper'>
                    <Link className='btn' to="/">Discover More</Link>
                </div>
            </div>
            <div className='col'>
                <div className='sub_banner_image'>
                    <img src={BannerImage}></img>
                </div>
                <div className='banner_style_1'>
                 {faChatIcon}
                 <h4>Factory</h4>
               
                 {faShieldIcon}
                 <h4>99.9% Sucess</h4>
              
                 {faChartAreaIcon}
                 <h4>Strategy</h4>
            </div>
            <div className='sub_background'>

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
