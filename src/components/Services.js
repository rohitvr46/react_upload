import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBolt} from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';



const Services = () => {
  return (
    <div className='service'>
<h1 className='head-ser'>SERVICES</h1><br/>
    <div className='main-service'>
      <div className='services-btm'>
        <a href='/semi-custom'><button className='ser-btm'><FontAwesomeIcon icon={faSliders} className='coffee' /><br/><br/><p className='bolt-icon'>Semi-Custom IC Layouts</p></button></a>
      </div>
      <div className='sevices-btm'>
      <a href='/full-custom'><button className='ser-btm'><FontAwesomeIcon icon={faMicrochip} className='coffee' /><br/><br/><p className='bolt-icon'>Full-Custom IC Layouts</p></button></a>
      </div>
      <div className='sevices-btm'>
      <a href='/high-voltage'><button className='ser-btm'><FontAwesomeIcon icon={faBolt} className='coffee' /><br/><br/><p className='bolt-icon'>High-Voltage IC Layouts</p></button></a>
      </div>
      {/* <div className='sevices-btm'>
      <a href='/standard-cell'><button className='ser-btm'><FontAwesomeIcon icon={faBolt} className='coffee' /><br/><br/><p className='bolt-icon'>Standard Cell</p></button></a>
      </div> */}
      
    </div>
    <br/>
    <br/>
    </div>
  )
}

export default Services
