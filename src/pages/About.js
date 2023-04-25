import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>Hi, my name is [Your Name], and I am a [Your Profession]. I have [Number of Years] of experience in [Your Field], and I specialize in [Your Specialization].</p>
      <p>In my free time, I enjoy [Your Hobbies or Interests].</p>
      <Footer/>
    </div>
  );
}

export default About;