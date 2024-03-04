import React from 'react'
import Img from './Chip11.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className='Cont'>
      <div className='Cont1'>
        <div className='image'>
            <img className="pic" src={Img} alt='main'/>
        </div>
        <div className="empty"></div>
            <div className="conts">
              <br/><br/>
                <p>
                Our specialty at EPICAL LAYOUTS is offering premium IC (Integrated Circuit) layout design services to satisfy the changing demands of the semiconductor sector. Using state-of-the-art technology and an experienced team of specialists, we aim to deliver excellence on every project we take on. <br/><br/>

We collaborate with companies to complete projects to the highest standards on schedule and within budget, whether they encounter a skills shortage or an unforeseen demand.<br/><br/>
With our layout expertise and proven experience with CMOS and BCD technologies in nodes like 180nm, 130nm, 65nm, 45nm, 22nm and 14nm of leading foundries such as TSMC, Global Foundries, XFAB, Silterra, IMEC, and others, we are able to deliver best-in-class full-custom IC layout services. 
                </p><br /><br />
            </div>
            </div>
    </div>
  )
}

export default Home
