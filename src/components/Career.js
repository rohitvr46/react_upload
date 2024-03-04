import React from 'react'
import Img from './gold.jpg';
import './Career.css'



const Career = () => {
  return (
    <div className='car-head'>
      <h1 className='car-head1'>CAREERS</h1>
    <div className='full-car'>
      
      <div className='car-content'>
        <p className='car-content1'>Discover a chance, with EPICAL LAYOUTS! We are looking for individuals who have a passion for Integrated Circuit layout. Join our team of innovative professionals for a future that's full of rewards. Get in touch with us to have a conversation, about how your skills match our vision. Together lets shape the future!.</p>
        <br/>
       <br/>
        <a href='/careers' className='car-link'><button className='car-btn'>More Information </button></a>
        
      </div>
      <div className='empty-space'></div>
      <div className='img-car'>
        <img src={Img} alt="image" className='img-car1'/>
      </div>
      
    </div>
    </div>
  )
}

export default Career



