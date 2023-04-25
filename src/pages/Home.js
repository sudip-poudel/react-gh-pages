import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header/>
      <h1>Welcome to my portfolio website!</h1>
      <p>Here, you can find information about my skills, experience, and projects.</p>
      <p>Feel free to browse around and contact me if you have any questions or inquiries.</p>
      <Footer/>
    </div>
  );
}

export default Home;