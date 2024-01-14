import React from 'react';
import './Contact.css';
// import React, { useState } from 'react';
// import {useState, handleSubmit } from 'react';
// import ContactImage from '../../assets/contact/contact.jpg';


// const MyForm = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       phone: '',
//       email: '',
//       message: '',
//     });
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log('Form submitted with data:', formData);
//       // Perform other actions as needed
  
//       setFormData({
//         name: '',
//         phone: '',
//         email: '',
//         message: '',
//       });
//     };
  
//     const handleChange = (event) => {
//       const { name, value } = event.target;
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };
// }
export default function Contact() {
  
  return (

    <>
        <section id="contact">
            <div className="container">
                <div className="contact_wrapper">
                    <div className="contact_col">
                        <div className="contact_image" >
                            {/* <img src={ContactImage} alt="Contact"/> */}
                            <h2>Contact Info</h2>
                            <div className='container'>
                            <div className='cone'>
                            <h3><span className='ricee' >Call Us</span></h3>
                            <h4> +91 9145110493 </h4>
                            </div>
                            <div className='ctwo'>
                            <h3><span className='ricee' >Our Email</span></h3>
                            <h4><a href='hariomricemill2007@gmail.com'>hariomricemill2007@gmail.com</a></h4>
                            </div>
                            <div className='cthree'>
                            <h3><span className='ricee' >Working Hours</span></h3>
                            <h4> Mon-Sat: 10AM-8PM </h4>
                            </div>
                            <div className='cfour'>
                            <h3><span className='ricee' >Our Location</span></h3>
                            <h4>Nagbhid district - Chandrapur, Maharashtra, India. </h4>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact_col">
                        <h2>Contact US</h2>
                        <form>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Your Name..." autoComplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="text" className="form-control" placeholder="Your Phone..." autoComplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="email" className="form-control" placeholder="Your Email..." autoComplete="off"/>
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