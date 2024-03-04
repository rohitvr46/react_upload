import '../pages/Careers.css';
import Ep1 from '../online-communication.jpg'
import Ep2 from '../work-culture.jpg'
import Copyright from '../Copyright'
import Navbar1 from '../Navbar1';
import React, { useState } from "react";
import { useEffect } from 'react';
import { Button } from "../Button";
import { Link } from 'react-router-dom';
import "../Navbar.css";
import Dropdown from "../Dropdown";
import "../Dropdown.css";
import { MenuItems } from "../MenuItems";
import MyImage from "../logo2.jpg";
import DropdownCustom from '../DropdownCustom';
import { useNavigate } from 'react-router-dom';
import Find from '../find.png'
import Contact1 from '../Contact1';


export default function Careers(){
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const [isGraduateInternVisible, setGraduateInternVisible] = useState(false);

  const toggleGraduateIntern = () => {
    setGraduateInternVisible(!isGraduateInternVisible);
  };

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
    <br/>
    <br/>
    <br/>
    
        <div className="career-contanier">
          <h1 className="career-heading">Why Epical Layouts</h1>
          <div className="why-container">
            <img src={Ep1} alt="image" className="why-img"/>
            <p className="why-para">A special opportunity to gain knowledge and advance one's abilities in the layout of Integrated Circuits exists with EPICAL LAYOUTS.<br/><br/>

               We are continuously on the lookout for talented and aspiring individuals. Therefore, please get in touch with us so that we can set up a time to talk about your future with us if you believe your talents and expertise will suit with our business.<br/><br/>

               Our workforce embraces diversity, and this has enhanced our commitment to learning and creativity.</p>
          </div>
        </div>
        <br/><br/>
        <div className="career-contanier">
          <h1 className="career-heading">Our Work Culture</h1>
          <div className="why-container">
            
            <p className="why-para">Our staff at EPICAL LAYOUTS is our most significant resource. We work as a cohesive, knowledgeable, and flexible team. We all share the commitment to deliver the highest quality work on time and to encourage a learning atmosphere so that we can bring out the best in one another.<br/><br/>

We firmly believe in the importance of maintaining a positive work-life balance. We have broken the mold by working hard throughout our work week while valuing our leisure time in a field where long work hours are common.</p>
               <img src={Ep2} alt="image" className="why-img"/>
          </div>
        </div>
        <br/>
        <br/>
        <h1 className="Job-heading">Job Openings</h1>
 
        <h1 id="myDropdown" className="graduate-intern">
        Graduate IC Design Intern
        <button onClick={toggleGraduateIntern} className="down-arrow-button">
          <i className={`arrow ${isGraduateInternVisible ? 'up' : 'down'}`}></i>
        </button>
        </h1>
        <br/><br/>
        {isGraduateInternVisible && (
        <div className="job-contanier">
        <h1 className="education-career">Education</h1>
        <br/><br/>
        <li className='edu-list'>Should be undergoing a Bachelor’s degree in Electrical/Electronic background</li><br/><br/>
        <h1 className="job-location">Job Location</h1><br/><br/>
        <li className='edu-list'>Chennai, Tamil Nadu, India</li><br/><br/>
        <h1 id="myDropdown" className="role-requirements">Role Requirements</h1><br/><br/>
        <div className="dropdown-content">
          <ul className='role-requirements-list'>
        <li className='edu-list'>Good problem-solving skills.</li><br/>
        <li className='edu-list'>Ideally have some exposure to Integrated Circuit Layout and/or Integrated Circuit Design through their university/college
      curricular,although, not essential.</li><br/>
        <li className='edu-list'>Good communication skills as well as strong interpersonal skills.</li><br/>
        <li className='edu-list'>Interest in improving knowledge and methodology.</li><br/>
        <li className='edu-list'>Ability to work independently as well as in teams, including remote teams.</li><br/>
        <li className='edu-list'>Ability to manage work in various time zones.</li><br/>
        <li className='edu-list'>Ability to work in close collaboration with customers.</li><br/>
        <li className='edu-list'>Fluent English is a requirement.</li><br/>
        </ul>
        </div>
        </div>
        )}
        <br/>
        <Contact1/>
        <Copyright/>
      </>
    )
}