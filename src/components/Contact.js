import React from 'react';
import './Contact.css';
import LinkedInIcon from './LinkedInIcon';
import Pc from './EPIC.jpg';
import {Link} from "react-router-dom";

const Contact = () => {
  return (
    <div className='contact-head'>
      <h1 className='header'>EMBARK YOUR JOURNEY WITH US</h1>
    <div className='Mainlast'>
        <Link to='/contactus'><button className='contbt'>CONTACT US NOW</button></Link>
        <br/>
        <a href='https://www.linkedin.com/company/epical-layouts-private-limited/' target='_blank'><LinkedInIcon/><p className='linked'></p></a>
    </div>
    </div>
  )
}

export default Contact
