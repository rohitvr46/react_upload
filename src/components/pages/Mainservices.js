import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "../Button";
import { Link } from 'react-router-dom';
import "../Navbar.css";
import "./Mainservices.css";
import "../Dropdown.css";
import { MenuItems } from "../MenuItems";
import MyImage from "../logo2.jpg";
import DropdownCustom from '../DropdownCustom';
import { useNavigate } from 'react-router-dom';
import Find from '../find.png'
import Contact1 from '../Contact1'
import Copyright from '../Copyright'
import Navbar1 from "../Navbar1";
import Chip from "../chips-removebg.png"

export default function Mainservices(){

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

    const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };
  
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
    <div className="service-head-main">
      <div className="semi-custom-container">
        <h1 className="semi-heading">SEMI-CUSTOM IC LAYOUTS</h1>
        <br/>
        <p className="semi-content">We work on Semi-custom integrated circuit (IC) layouts in which some IC layout elements are standardized while enabling customization of specific design blocks or elements within the design. This strategy is frequently employed to achieve a balance between the flexibility of totally custom ICs and the cost-effectiveness of fully standardized ICs.</p>
        <br/>
        <a className="semi-custom-link" href="/semi-custom"><button className="semi-custom-button">Read More </button></a>
      </div>
    </div>


    <div className="service-head-main">
      <div className="semi-custom-container">
        <h1 className="semi-heading">FULL-CUSTOM IC LAYOUTS</h1>
        <br/>
        <p className="semi-content">We involve ourself designing every transistor and interconnect in the integrated circuit from scratch, without relying on pre-designed or standardized components. This approach offers us maximum flexibility and allows us to optimize the circuit for specific performance metrics, such as speed, power consumption, and area.</p>
        <br/>
        <a className="semi-custom-link" href="/high-voltage"><button className="semi-custom-button">Read More </button></a>
      </div>
    </div>

    <div className="service-head-main">
      <div className="semi-custom-container">
        <h1 className="semi-heading">HIGH-VOLTAGE IC LAYOUTS</h1>
        <br/>
        <p className="semi-content">Our High-voltage integrated circuit (IC) layouts involve designing circuits that can operate at voltages significantly higher than those typically found in standard ICs. These circuits are commonly used in power management, automotive applications, industrial control systems, and other areas where high-voltage requirements are necessary.</p>
        <br/>
        <a className="semi-custom-link" href="/mixed-signal"><button className="semi-custom-button">Read More </button></a>
      </div>
    </div>
    <Contact1/>
    <Copyright/>
  </>
    )
}