import React from 'react'
import './Manufacture.css'
import Heroone from '../../assets/survices/a3e627f8-873d-4dc9-8e5f-2187a4a32254.jpeg'
import Herotwo from '../../assets/survices/a66d21e2-7da9-4e13-9ed6-8be61ca2f0b0.jpeg'
import Herothree from '../../assets/survices/c6607b43-6bd7-41b7-b21f-b1db59455545.jpeg'
import Herofour from '../../assets/survices/3cfb5aaf-5aef-4467-8d8d-9962b96fcd1d.jpeg'
import Herofive from '../../assets/survices/5064ef58-1297-4063-b9a2-c4ebc7862e2e.jpeg'
import Herosix from '../../assets/survices/8af490d1-be1c-4078-bcd7-dbd816142bf9.jpeg'

function Manufacture() {
    return (
        <>
        <div className='container'>
            <div className='hero'>
                <div className='description'><h3><span className='rice' >Cleaning and Dehusking:</span></h3><br /><br /><br /><p>Raw paddy rice is fed into the machine.<br />
                    The first step involves cleaning the rice to remove impurities such as stones, dust, and straw.<br />
                    Dehusking or hulling is the next step, where the outer husk layer of the rice is removed.</p></div>
                <div className='heroonee'>
                    <img src={Heroone}></img></div>
            </div>
            <div className='hero'>
                <div className='description'><h3><span className='rice' >Separation of Husk and Brown Rice:</span></h3><br /><br /><br /><p>After dehusking, the mixture of brown rice and husk is separated.<br />
                    The husk is expelled or collected for other uses, while the brown rice continues to the next stage.</p></div>
                <div className='heroone'><img src={Herotwo}></img></div>
            </div>

            <div className='hero'>
                <div className='description'><h3><span className='rice' >Whitening or Polishing:</span></h3><br /><br /><br /><p>The brown rice, still covered with bran layers, undergoes whitening or polishing.<br />
                    Whitening removes the bran layers to achieve the desired white rice appearance.<br />
                    Polishing adds a glossy finish to the rice grains.</p></div>
                <div className='herooneee'><img src={Herothree}></img></div>
            </div>
            <div className='hero'>
                <div className='description'><h3><span className='rice' >Separation of Broken Rice:</span></h3><br /><br /><br /><p>Rice grains can break during the milling process. A separator is used to <br />separate broken rice from whole grains.</p></div>
                <div className='herooneeee'><img src={Herofour}></img></div>
            </div>
            <div className='hero'>
                <div className='description'><h3><span className='rice' >Grading and Sorting:</span></h3><br /><br /><br /><p>The machine grades and sorts the polished rice based on size and quality.<br />
                    This step ensures that the final product meets specific market standards.</p></div>
                <div className='herooneeeee'><img src={Herofive}></img></div>
            </div>
            <div className='hero'>
                <div className='description'><h3><span className='rice' >Packaging:</span></h3><br /><br /><br /><p>The final polished and graded rice is then ready for packaging.<br />
                    The packaging process may be integrated into the rice mill or done as a separate operation.</p></div>
                <div className='heroooonee'><img src={Herosix}></img></div>
            </div>
            </div>
        </>
    )
}

export default Manufacture
