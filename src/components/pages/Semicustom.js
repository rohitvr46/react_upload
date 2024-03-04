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
 
export default function Semicustom(){

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
        <h1 className="semi-heading">SEMI-CUSTOM IC LAYOUTS</h1>
        <br/>
        <p className="semi-content">We work on Semi-custom integrated circuit (IC) layouts in which some IC layout elements are standardized while enabling customization of specific design blocks or elements within the design. This strategy is frequently employed to achieve a balance between the flexibility of totally custom ICs and the cost-effectiveness of fully standardized ICs.</p>
        <br/>
        <b className="semi-content">Here's a breakdown of our typical process and characteristics of semi-custom IC layouts: </b>
        <br/>
        <div className="semi-key-point">
          <p className="semi-key-points-content">
          <span className="change-color">Standardized Core Components:</span><br/><br/>The core components of the integrated circuit, such as standard cells, memory blocks, and I/O interfaces, are pre-designed and standardized. These components are often optimized for performance, power, and area based on common use cases.<br/><br/>
<span className="change-color">Customizable Blocks:</span><br/><br/>Certain blocks or modules within the IC are left open for customization. These could include analog circuits, specialized signal processing units, or any functionality that is unique to the specific application of the IC.<br/><br/>
<span className="change-color">Design libraries:</span><br/><br/>Designers have access to a library of pre-designed and characterized blocks that we can use to assemble the custom parts of the IC. These libraries may include various functional blocks, such as analog-to-digital converters (ADCs), digital-to-analog converters (DACs), filters, amplifiers, and more.<br/><br/>
<span className="change-color">Design tools and methodologies:</span><br/><br/> Design tools and methodologies are used to integrate the standardized components with the custom blocks efficiently. This involves floor-planning, placement, routing, and verification processes to ensure that the final layout meets the performance, power, and area targets.<br/><br/>
<span className="change-color">Trade-offs:</span><br/><br/>We must make trade-offs between customization and standardization to achieve the desired balance of performance, cost, and time-to-market. Customizing too many parts of the IC can increase design complexity, verification effort, and manufacturing costs, while relying too heavily on standardized components may limit the flexibility and differentiation of the final product.<br/><br/>
Overall, we offer a flexible approach to IC design, allowing you to balance the benefits of standardization with the need for customization to meet specific application requirements.

          </p>
        </div>
      </div>
    </div>
     <Contact1/>
    <Copyright/>
        </>
    )
}