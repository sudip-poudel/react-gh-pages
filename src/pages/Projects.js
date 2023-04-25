// Projects.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Projects() {
  return (
    <div>
      <Header />
      <h1>Projects</h1>
      <p>Here are some of my recent projects:</p>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
      <Footer/>
    </div>
  );
}

export default Projects;