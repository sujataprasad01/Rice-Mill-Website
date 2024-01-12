import React from 'react';
import './Contact.css';
// import ContactImage from '../../assets/contact/contact.jpg';

export default function Contact() {
  return (
    <>
        <section id="contact">
            <div className="container">
                <div className="contact_wrapper">
                    <div className="contact_col">
                        <div className="contact_image">
                            {/* <img src={ContactImage} alt="Contact"/> */}
                            <h2>Contact Info</h2>
                            <div className='cone'>
                            <h3>Call Us</h3>
                            <h4> +91 9145110493 </h4>
                            </div>
                            <div className='ctwo'>
                            <h3>Our Email</h3>
                            <h4><a href='hariomricemill2007@gmail.com'>hariomricemill2007@gmail.com</a></h4>
                            </div>
                            <div className='cthree'>
                            <h3>Working Hours</h3>
                            <h4> Mon-Sat: 10AM-8PM </h4>
                            </div>
                            <div className='cfour'>
                            <h3>Our Location</h3>
                            <h4>Nagbhid district - Chandrapur, Maharashtra, India. </h4>
                            </div>
                        </div>
                    </div>
                    <div className="contact_col">
                        <h2>Contact US</h2>
                        <form>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Your Name..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Your Phone..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="email" className="form-control" placeholder="Your Email..." autocomplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <textarea placeholder="Write a Message..."></textarea>
                            </div>
                            <div className="btn_wrapper">
                                <button type="submit" className="btn">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}