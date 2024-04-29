import React from 'react'
import Img from './gradient.jpg';
import './Universityrelations.css'



const Universityrelations = () => {
  return (
    <div className='car-head'>
      <h1 className='car-head1'>UNIVERSITY RELATIONS</h1>
    <div className='full-car'>
    <div className='img-car'>
        <img src={Img} alt="image" className='img-car1'/>
      </div>
      <div className='uni-content'>
        <p className='uni-content1'></p>In order to promote technological education and innovation, we collaborate with the academic community and dedicated to giving students, teachers, researchers, and upcoming inventors access to trainings and support that are at the forefront of their sector.
        <br/>
       <br/>
        <a href='/univrelations' className='car-link'><button className='car-btn1'>More Information </button></a>
        
      </div>
 
    </div>
    </div>
  )
}

export default Universityrelations