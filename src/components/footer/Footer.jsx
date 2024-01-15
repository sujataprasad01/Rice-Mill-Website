import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/noun-rice-94344 (1).png'
function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCopy = () => {
    const phoneNumber = "+91 9145110493";
    navigator.clipboard.writeText(phoneNumber);
    // props.showAlert("Your text is copied to clipboard", "success")

}

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
        <div>
        <h3>Office</h3>
        <h4>Nagbhid district - Chandrapur, Maharashtra, India.</h4>
        <h3>Contact Us</h3>
       <h4> Call and WhatsApp :<button onClick={handleCopy} title="Click to Copy">+91 9145110493</button></h4>
        <h4>E-mail I'd : <Link to='mailto:hariomricemill2007@gmail.com'>hariomricemill2007@gmail.com</Link></h4>
        </div>
        <div>
            <h3>Quick Links</h3>
            <Link to='/' onClick={scrollToTop}><h4>Home</h4></Link>
            <Link to='/manufacture' onClick={scrollToTop}><h4>Manufacture</h4></Link>
            <Link to='/about' onClick={scrollToTop}><h4>About Us</h4></Link>
            <Link to='/export' onClick={scrollToTop}><h4>Export</h4></Link>
            <Link to='/contact' onClick={scrollToTop}><h4>Contact</h4></Link>
            {/* <Link to='/contact'><h4>Conatct Us</h4></Link> */}

        </div>
      </div>
    </div>
  )
}

export default Footer
