// Contact.js

import React from 'react';
import './contactStyle.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
function Contact() {
  return (
    <>
    <Header/>
      <div className='container'>
        <h1>Contact</h1>
        <p>Feel free to contact me using the form below:</p>
        <form>
          <div className='boxes'>
            <div className='box'>
            <input type="text" name="name" placeholder='Name'/>
            </div>
            <div className='box'>
            <input type="email" name="email" placeholder='E-mail' />
            </div>
            <div className='box'>
            <textarea name="message" rows="5" placeholder='Tell me about yourself'/>
            </div>
            <div className='btn'>
            <button type="submit">Send</button>
            </div>
          </div>
        </form>
        <Footer/>
      </div>
    </>
  );
}

export default Contact;