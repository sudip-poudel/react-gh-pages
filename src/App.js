import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/contact" element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </>
  );
}

export default App;