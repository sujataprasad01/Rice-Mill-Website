import React from 'react'
import './Footer.css'
import logo from '../../assets/logo/noun-rice-94344 (1).png'
function Footer() {
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <div className='heading'>
<img className='logo' src={logo}></img>
</div>
        <h3>Since its establishment in 
2007 , our company has made a name for itself in the 
Rice market. That is because we believe in making only the highest quality products and supplying the same to our valued 
customers.</h3>
      </div>
      <div className='sub_container2'>
        <h3>Office</h3>
        <h4>Nagbhid district - Chandrapur, Maharashtra, India.</h4>
        <h3>Contact Us</h3>
        <h4>Call and WhatsApp : +91 9145110493</h4>
        <h4>E-mail I'd : <a href='hariomricemill2007@gmail.com'>hariomricemill2007@gmail.com</a></h4>
      </div>
    </div>
  )
}

export default Footer