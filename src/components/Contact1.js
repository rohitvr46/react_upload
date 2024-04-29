import React from 'react';
import './Contact1.css';
import Pc from './EPIC2.jpg';
import LinkedInIcon from './LinkedInIcon';

const Contact1 = () => {
  return (
    <div className='contact-below'>
      <div className='image-color-change'>
        <img className="imagesize-change" src={Pc} alt='logo'/>
      </div>
      <div className='about-us'>
        <b className='about-us-head'>In relation to us</b><br/><br/>
        <ul className='about-us-list'>
            <li className='list-items'><a className='list-items' href='/careers'>Careers</a></li><br/>
            <li className='list-items'><a className='list-items' href="/about-us">About Us</a></li><br/>
            <li className='list-items'><a className='list-items' href='/careers'>University Relations</a></li><br/>
            <li className='list-items'><a className='list-items' href="contactus">Contact Us</a></li><br/>
        </ul>
      </div>
      <div className='contact-services'>
        <b className='about-us-head'>IC Layout Services</b><br/><br/>
        <ul className='about-us-list'>
            <li className='list-items'><a className='list-items' href='/semi-custom'>Semi-Custom IC Layout</a></li><br/>
            <li className='list-items'><a className='list-items' href='/full-custom'>Full-Custom IC Layout</a></li><br/>
            <li className='list-items'><a className='list-items' href='/high-voltage'>High-Voltage IC Layout</a></li><br/>
        </ul>
      </div>
      <div className='contact-address'>
        <b className='about-us-head'>Embark Your Journey With Us</b><br/>
        <br/>
        <p className='list-items1'>
                    Corporate Office: Chennai,India<br/><br/>
                    Phone No: +91 78068 65817<br/><br/>          
        </p>
        <a href='https://www.linkedin.com/company/epical-layouts-private-limited/' target='_blank'><LinkedInIcon/><p className='linked'></p></a>
      </div>
    </div>
  )
}

export default Contact1
