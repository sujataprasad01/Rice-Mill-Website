import React , {useEffect, useState, useRef} from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { submitForm, saveMessages, getElementVal } from '../../firebase';
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

    // const [showAlert, setShowAlert] = useState(false);
    const contactFormRef = useRef(null);
    // useEffect(() => {

        // const contactForm = document.getElementById("contactForm");
        // contactFormRef.current = contactForm;
        // if (contactForm) {
    const handleSubmit = (e) => {
        e.preventDefault(); // Call the submitForm function from firebase.js
        // submitForm();

      var name = getElementVal("name");
      var phone = getElementVal("phone");
      var emailid = getElementVal("emailid");
      var msgContent = getElementVal("msgContent");
  
      // Call the saveMessages function from firebase.js
      saveMessages(name, phone, emailid, msgContent);
  
  //   enable alert
  const alertElement = document.querySelector(".alert");
  if (alertElement && alertElement.style) {
    alertElement.style.display = "block";
  }

  document.getElementById("contactForm").reset();

  //   remove the alert
  setTimeout(() => {
    if (alertElement && alertElement.style) {
        alertElement.style.display = "none";
      }
  }, 3000);
    
      // Reset the form

    };
    //   componentDidMount() {
    //     document.getElementById("contactForm").addEventListener("submit", submitForm);
    // }
    
    //     document.getElementById("contactForm").addEventListener("submit", handleSubmit);
    
    //     // Cleanup the event listener on component unmount
    //     return () => {
    //         if (contactFormRef.current) {
    //         document.getElementById("contactForm").removeEventListener("submit", handleSubmit);
    //         }
    //     };
    //     };
    // }, []);

    const handleCopy = () => {
        const phoneNumber = "+91 9145110493";
        navigator.clipboard.writeText(phoneNumber);
        // props.showAlert("Your text is copied to clipboard", "success")
    
    }

  return (

    <>
        <section id="contact">
            <div className="container">
                <div className="contact_wrapper">
                    <div className="contact_col">
                        <div className="contact_image" >
                            {/* <img src={ContactImage} alt="Contact"/> */}
                            <h2>Contact Info</h2>
                            <div className='containerr'>
                            <div className='cone'>
                            <h3><span className='ricee' >Call Us</span></h3>
                            <h4><button onClick={handleCopy} title="Click to Copy">+91 9145110493</button></h4>
                            </div>
                            <div className='ctwo'>
                            <h3><span className='ricee' >Our Email</span></h3>
                            <h4><Link to='mailto:hariomricemill2007@gmail.com'>hariomricemill2007@gmail.com</Link></h4>
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
                        <form id='contactForm' ref={contactFormRef} onSubmit={handleSubmit}>
                       <div className="alert">Your message sent</div>
                       <div className='container'>
                            <div className="input_wrapper">
                                <input type="text" id='name' className="form-control" placeholder="Your Name..." autoComplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="text" id='phone' className="form-control" placeholder="Your Phone..." autoComplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <input type="email" id='emailid' className="form-control" placeholder="Your Email..." autoComplete="off"/>
                            </div>
                            <div className="input_wrapper">
                                <textarea id='msgContent' placeholder="Write a Message..."></textarea>
                            </div>
                            <div className="btn_wrapper">
                                <button type="submit" className="btn">
                                    Submit
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}