import './Univrelations.css'
import './Semicustom.css'
import React, { useState } from "react";
import { useEffect } from 'react';
import { Button } from "../Button";
import { Link } from 'react-router-dom';
import Navbar1 from '../Navbar1';
import "../Navbar.css";
import "../Dropdown.css";
import { MenuItems } from "../MenuItems";
import MyImage from "../logo2.jpg";
import DropdownCustom from '../DropdownCustom';
import { useNavigate } from 'react-router-dom';
import Find from '../find.png'
import Contact1 from '../Contact1'
import Copyright from '../Copyright'
import teams from './Teams.jpg';
import vision from './specs2.jpg';
import mission from './mission.jpeg';
import './Aboutus.css'
 
export default function Aboutus(){

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
  console.log(MenuItems);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdown(false);
    }
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth >= 960) {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth >= 960) {
      setDropdown1(false);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth >= 960) {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth >= 960) {
      setDropdown2(false);
    }
  };
  const onMouseEnter3 = () => {
    if (window.innerWidth >= 960) {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth >= 960) {
      setDropdown3(false);
    }
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

    const [searchTerm, setSearchTerm] = useState('');
    const history = useNavigate();
  
    const handleSearch = () => {
      const lowerCaseTerm = searchTerm.toLowerCase();
  
      if (lowerCaseTerm === 'contact') {
        history('/contactus');
      } 
      else if (lowerCaseTerm === 'services') {
        history('/services');
      } 
      else if (lowerCaseTerm === 'tech articles') {
        history('/techarticles');
      } else if (lowerCaseTerm === 'careers') {
        history('/careers');
      } else if (lowerCaseTerm === 'university relations') {
        history('/univrelations');
      }
      else if (lowerCaseTerm === 'semi custom') {
        history('/semi-custom');
      } else if (lowerCaseTerm === 'high voltage') {
        history('/high-voltage');
      }
      else if (lowerCaseTerm === 'mixed signal') {
        history('/mixed-signal');
      }
      else if (lowerCaseTerm === 'standard cell') {
        history('/standard-cell');
      }
    };
  return (
    <>
    <Navbar1/>
    {/* start of univ relations */}
    <br/>
    <div className="service-head-main">
      <div className="semi-custom-container1">
        <h1 className="semi-heading">ABOUT US</h1>
        <br/>
        <p className='semi-content'>
                Our specialty at EPICAL LAYOUTS is offering premium IC (Integrated Circuit) layout design services to satisfy the changing demands of the semiconductor sector. Using state-of-the-art technology and an experienced team of specialists, we aim to deliver excellence on every project we take on. <br/><br/>

We collaborate with companies to complete projects to the highest standards on schedule and within budget, whether they encounter a skills shortage or an unforeseen demand.<br/><br/>
With our layout expertise and proven experience with CMOS and BCD technologies in nodes like 180nm, 130nm, 65nm, 45nm, 22nm and 14nm of leading foundries such as TSMC, Global Foundries, XFAB, Silterra, IMEC, and others, we are able to deliver best-in-class full-custom IC layout services. 
                </p>
        <br/>
        <b className="semi-content">What Sets Us Apart</b>
        <br/>
        <div className="semi-key-point">
          <p className="semi-key-points-content">
          <span className="change-color">Expertise:</span><br/><br/>Our team consists of highly skilled engineers with years of experience in IC layout design. From analog to digital, RF to mixed-signal, we have the expertise to tackle a wide range of design challenges.<br/><br/>
<span className="change-color">Innovation:</span><br/><br/>We are at the forefront of innovation, constantly exploring new techniques and methodologies to optimize our design processes and deliver superior results.<br/><br/>
<span className="change-color">Collaboration:</span><br/><br/>We believe in the power of collaboration. By working closely with our clients, we ensure that we fully understand their requirements and can tailor our services to meet their specific needs.<br/><br/>
<span className="change-color">Quality:</span><br/><br/>  Quality is at the heart of everything we do. We adhere to rigorous quality standards throughout the design process to ensure that our deliverables meet the highest levels of accuracy and reliability.<br/><br/>

          </p>
        </div>
        <br/>
        <br/>
        <h1 className="semi-heading">MEET OUR TEAM</h1>
        <br/>
        <div className='team-image'>
            <img src={teams} alt='team-img' className='team-image-alt'/>
        <p className='semi-content1'>
        We have reputable and current understanding of tools, foundries, and processes thanks to our work and our well-regarded training programs.
        Our team members have at least a bachelor's degree in engineering, so we can communicate on a very technical level with your design teams. We function as an extension of your own design teams, integrating all vital IC Layout components into a simplified business strategy.
                </p>
        </div>
        <br/>
        <br/>
        <h1 className="semi-heading">OUR VISION</h1>
        <br/>
        <div className='team-image'>
            <img src={vision} alt='team-img' className='team-image-alt'/>
        <p className='semi-content2'>
        We have reputable and current understanding of tools, foundries, and processes thanks to our work and our well-regarded training programs.
        Our team members have at least a bachelor's degree in engineering, so we can communicate on a very technical level with your design teams. We function as an extension of your own design teams, integrating all vital IC Layout components into a simplified business strategy.
                </p>
        </div>
        <br/>
        <br/>
        <h1 className="semi-heading">OUR MISSION</h1>
        <br/>
        <div className='team-image'>
            <img src={mission} alt='team-img' className='team-image-alt'/>
        <p className='semi-content1'>
        We have reputable and current understanding of tools, foundries, and processes thanks to our work and our well-regarded training programs.
        Our team members have at least a bachelor's degree in engineering, so we can communicate on a very technical level with your design teams. We function as an extension of your own design teams, integrating all vital IC Layout components into a simplified business strategy.
                </p>
        </div>
        <br/>
      </div>
    </div>

     <Contact1/>
    <Copyright/>
        </>
    )
}
