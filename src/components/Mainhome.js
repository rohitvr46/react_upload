import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import News from './News';
import Universityrelations from './Universityrelations';
import Career from './Career';
import Clients from './Clients';
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
      <Clients/>
      {/* <News/> */}
      <Universityrelations/>
      <Career/>
      <Contact1/>
      <Copyright/>
    </div>
  )
}

export default Mainhome