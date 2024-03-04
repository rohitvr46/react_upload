import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import News from './News';
import Featuresbus from './Featuresbus';
import Career from './Career';
import Slider2 from './Slider2';
import Contact from './Contact';
import Services from './Services';
import Copyright from './Copyright';
import Navbar1 from './Navbar1';
import Contact1 from './Contact1';
import { useEffect } from 'react';

const Mainhome = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar1/>
      <Navbar/>
      <Home/>
      <Services/>
      <Slider2/>
      {/* <News/> */}
      <Featuresbus/>
      <Career/>
      <Contact1/>
      <Copyright/>
    </div>
  )
}

export default Mainhome
