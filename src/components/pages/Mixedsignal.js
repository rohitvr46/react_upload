import './Mixedsignal.css'
import Contact1 from "../Contact1";
import Copyright from "../Copyright";
import React, { useState } from "react";
import { useEffect } from 'react';
import { Button } from "../Button";
import { Link } from 'react-router-dom';
import "../Navbar.css";
import Navbar1 from '../Navbar1';
import Dropdown from "../Dropdown";
import "../Dropdown.css";
import { MenuItems } from "../MenuItems";
import MyImage from "../logo2.jpg";
import DropdownCustom from '../DropdownCustom';
import { useNavigate } from 'react-router-dom';
import Find from '../find.png'
 
export default function Mixedsignal(){

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
    <br/>
    {/* start of univ relations */}
    <div className="service-head-main">
      <div className="semi-custom-container1">
        <h1 className="semi-heading">HIGH-VOLTAGE IC LAYOUTS</h1>
        <br/>
        <p className="semi-content">Our High-voltage integrated circuit (IC) layouts involve designing circuits that can operate at voltages significantly higher than those typically found in standard ICs. These circuits are commonly used in power management, automotive applications, industrial control systems, and other areas where high-voltage requirements are necessary.</p>
        <br/>
        <b className="semi-content">Designing IC layouts for high-voltage applications comes with several unique challenges and considerations:</b>
        <br/>
        <div className="semi-key-point">
          <p className="semi-key-points-content">
          <span className="change-color">Isolation Techniques:</span><br/><br/>We often use isolation between different functional blocks to prevent voltage breakdown and ensure safety for high voltage designs. Isolation techniques such as deep trench isolation, guard rings, and specialized isolation structures are implemented in the layout to maintain electrical isolation between circuit elements.<br/><br/>
<span className="change-color">Thick Oxide Layers:</span><br/><br/>To withstand high voltages, the gate oxide layers in transistors need to be thicker compared to standard ICs. We must ensure that the layout accommodates the thicker oxide layers while maintaining proper device performance and reliability.<br/><br/>
<span className="change-color">Spacing and Clearance:</span><br/><br/>High-voltage IC layouts require increased spacing and clearance between conductive traces and components to prevent arcing and breakdown at high voltages. Layout rules and design guidelines must be followed to meet safety and reliability requirements.<br/><br/>
<span className="change-color">Guard Rings and Rings of Protection:</span><br/><br/>Guard rings are commonly used in high-voltage layouts to minimize electric field distortion and prevent voltage breakdown. Rings of protection are also implemented around sensitive circuit elements to mitigate the effects of high-voltage transients and improve reliability.<br/><br/>
<span className="change-color">High-Voltage Transistors:</span><br/><br/>Specialized high-voltage transistors with enhanced breakdown voltage capabilities are used in high-voltage IC layouts. These transistors typically have larger dimensions and specific doping profiles to withstand higher voltages while maintaining proper performance.<br/><br/>
<span className="change-color">Shielding and Grounding:</span><br/><br/>We implement proper shielding and grounding techniques which are essential in high-voltage layouts to minimize electromagnetic interference (EMI) and ensure signal integrity. We also add grounding planes and shields which will be strategically placed in the layout to reduce noise and improve overall circuit performance.<br/><br/>
In summary, we design layouts for high-voltage integrated circuits with careful consideration of isolation techniques, spacing requirements, transistor design, shielding, and reliability testing. By addressing these challenges effectively, we develop high-voltage IC layouts that meet stringent performance, safety, and reliability requirements.

          </p>
        </div>
      </div>
    </div>
     <Contact1/>
    <Copyright/>
    </>
    )
}