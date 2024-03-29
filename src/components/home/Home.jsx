import React, { useEffect } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import BannerImage from '../../assets/banner/ba01c2ad-b832-4a25-a16d-24f8225c8e6e.jpeg';
import surviceone from '../../assets/survices/1f0640e5-4c8b-4116-8794-f1d1c0e675ce.jpeg';
import survicetwo from '../../assets/survices/75cc3e07-d1b7-46b5-9be9-c8b984a2631f.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer/Footer';
import About from '../about/About';
// import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

// import Footer from '../footer/Footer';
function Home() {

  const faChatIcon = <FontAwesomeIcon icon={faChartLine} />
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section id='home'>
        <div className='banner_image'>
          <div className='containerrrr'>
            <div className='banner_outer'>
              <div className='col'>
                <h3 className='title'>
                  Leading <span className='rice' >Rice</span> Manufacturer and Exporter
                </h3>
                <p>
                  Providing Quality Grains to Your Doorstep, <br />Your <span className='rice' >Trusted</span> Rice <span className='rice' >Provider</span>, Anytime, Anywhere!
                </p>
                <div className='btn_wrapper'>
                  {/* <Link className='btn' to="/about">Discover More</Link> */}
                  <Link className='btn' to='/about' onClick={scrollToTop}>
                Discover More
                  </Link>
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
              </div>
            </div>
           </div>
            </div>
          <div className='containerrr'>
            <div className='title_two'>
              <h3>Our Services</h3>
            </div>
            <div className='survices'>

              <div className='sub_banner_image'>
                <img src={surviceone}></img>
                <h4>Manufacturing</h4>
                <p>Nurturing <span className='rice' >quality rice</span>, one grain at a time, at our <span className='rice' >advanced</span> rice mill manufacturing unit.</p>
                <div className='btn_wrapperr'>
                  <Link className='btnn' to="/manufacture" onClick={scrollToTop}>Read More</Link>
                </div>
              </div>
              <div className='sub_banner_image2'>
                <img src={survicetwo}></img>
                <h4>Exporting</h4>
                <p>Bringing the <span className='rice' >best</span> rice to your plate from our mill, no <span className='rice' >matter</span> where you are. From our Exportation Service</p>
                <div className='btn_wrapperr'>
                  <Link className='btnn' to="/export" onClick={scrollToTop}>Read More</Link>
                </div>
              </div>
            </div>
            </div>
{/* 
          </div>
        </div> */}
      </section>

    </>
  )
}

export default Home
