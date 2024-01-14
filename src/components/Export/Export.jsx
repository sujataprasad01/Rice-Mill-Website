import React from 'react';
import './Export.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins } from '@fortawesome/free-solid-svg-icons';
import Paraboild from '../../assets/survices/ir-64-parboiled-rice-1626094215-5894204.jpeg';
import White from '../../assets/survices/ir-64-non-basmati-parboiled-rice-500x500.webp';
import Lachkari from '../../assets/survices/sona-masoori-rice-500x500.webp';
import Kali from '../../assets/survices/white-kali-much-rice-500x500.webp';
import Heroone from '../../assets/survices/a3e627f8-873d-4dc9-8e5f-2187a4a32254.jpeg'
import Herotwo from '../../assets/survices/a66d21e2-7da9-4e13-9ed6-8be61ca2f0b0.jpeg'
import Herothree from '../../assets/survices/c6607b43-6bd7-41b7-b21f-b1db59455545.jpeg'

export default function Export() {

    // Icons
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
  return (
    <>
     <div id="services">
     <div className="title_headling">
     <h3>Exquisite Rice Varieties, Expertly Manufactured and Supplied for Every Palate</h3>

                <p>From Our Fields to Your Fork: Savor the Finest Non-Basmati Rice Varieties, Carefully Crafted and Promptly Delivered.</p>
            </div>

     <div className='heo'>
            <div className='heoonee'><img src={Heroone}></img></div>
            <div className='heoone'><img src={Herotwo}></img></div>
            <div className='heoonee'><img src={Herothree}></img></div>

        </div>
        <div className="container">
          
            <div className="service_wrapper">
            {/* <div className="title_headlingg"> */}
     <h3>Exportation of Varieties of Rice</h3>
            {/* </div> */}
                <div className="service_box">
                    <div className="service_imgone"><img src={Paraboild}></img></div>
                    {/* <h4 className="number">01</h4> */}
                    <div className="service_content">
                        <h5>IR 64 Parboiled Rice</h5>
                        <p>Type: Parboiled<br/>
Length: 6-7 mm<br/><br/>Experience the Perfect Blend of Nutrient-Rich Parboiled Goodness in Every Grain of IR 64.</p>
                        {/* <a href="/" className="read">Read more</a> */}
                    </div>
                </div> 
                <div className="service_box">
                <div className="service_imgone"><img src={White}></img></div>

                    {/* <h4 className="number">02</h4> */}
                    <div className="service_content">
                        <h5>IR 64 White Rice</h5>
                        <p>Type: Non-Basmati<br/>
Processing: White rice<br/>
Length: 6-7 mm<br/><br/>Pure Elegance on Your Plate: IR 64 Non-Basmati White Rice, Expertly Processed for Delicate Flavors.</p>
                        {/* <a href="/" className="read">Read more</a> */}
                    </div>
                </div>
                <div className="service_box">
                <div className="service_imgone"><img src={Lachkari}></img></div>

                    {/* <h4 className="number">03</h4> */}
                    <div className="service_content">
                        <h5>Lachkari Kolam</h5>
                        <p>Type: Non-Basmati<br/>
Processing: Available in both raw and steam varieties<br/>
Length: 6-7 mm<br/><br/>Versatile Delight: Lachkari Kolam, a Symphony of Taste Available in Both Raw and Steam Varieties.</p>
                        {/* <a href="/" className="read">Read more</a> */}
                    </div>
                </div>
                <div className="service_box">
                <div className="service_imgone"><img src={Kali}></img></div>

                    {/* <h4 className="number">04</h4> */}
                    <div className="service_content">
                        <h5>Kali Mooch Raw Rice</h5>
                        <p>Type: Non-Basmati
Processing: Raw rice<br/><br/>Straight from the Fields to Your Kitchen: Kali Mooch Raw Rice, the Essence of Unprocessed Goodness.</p>
                        {/* <a href="/" className="read">Read more</a> */}
                    </div>
                </div>
                
                           </div>
                         
        </div>
        
     </div>
   
    </>
  )
}