import './Univrelations.css'
import './Highvoltage.css'
import Contact1 from "../Contact1";
import Copyright from "../Copyright";
import Student from '../students.jpg'
import Research from '../researchers.jpg'
import Educator from '../educators.jpg'
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
import Navbar1 from '../Navbar1';
 
export default function Highvoltage(){

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
        <h1 className="semi-heading">FULL-CUSTOM IC LAYOUTS</h1>
        <br/>
        <p className="semi-content">We involve ourself designing every transistor and interconnect in the integrated circuit from scratch, without relying on pre-designed or standardized components. This approach offers us maximum flexibility and allows us to optimize the circuit for specific performance metrics, such as speed, power consumption, and area.</p>
        <br/>
        <b className="semi-content">Here are some key characteristics and considerations we take in full custom IC layouts:</b>
        <br/>
        <div className="semi-key-point">
          <p className="semi-key-points-content">
          <span className="change-color">Transistor-Level Design:</span><br/><br/>We manually place and size individual transistors to implement the desired logic functions, analog circuits, and other components of the IC. This level of control enables precise optimization for performance and power.<br/><br/>
<span className="change-color">Custom Interconnect:</span><br/><br/>Interconnects between transistors and components are designed and laid out according to the specific requirements of the circuit. Routing and wire widths are carefully chosen to minimize delays, crosstalk, and parasitic effects.<br/><br/>
<span className="change-color">Design Tools:</span><br/><br/>Specialized design tools are used for layout, simulation, and verification of full custom ICs. These tools provide features for transistor-level design, layout extraction, parasitic extraction, timing analysis, and more.<br/><br/>
<span className="change-color">Complexity and Time-to-Market:</span><br/><br/>Full custom IC design is a highly complex and time-consuming process compared to semi-custom or standard cell-based design methodologies. Designing every component from scratch requires a deep understanding of semiconductor physics, circuit design principles, and manufacturing processes.<br/><br/>
<span className="change-color">Performance Optimization:</span><br/><br/>With full control over the layout and transistor sizing, we can optimize the circuit for specific performance metrics, such as speed, power consumption, and noise immunity. This level of optimization is often necessary for high-performance applications such as microprocessors, high-speed communication interfaces, and analog circuits.<br/><br/>
<span className="change-color">Cost Considerations:</span><br/><br/>Full custom IC design can be expensive due to the extensive design effort, specialized tools, and potential manufacturing iterations required to achieve desired performance targets. However, for certain applications where performance is critical and economies of scale are favourable, the benefits of full customization may outweigh the costs.<br/><br/>
In summary, our full custom IC layouts offer the highest level of design flexibility and optimization we apply our significant expertise, resources, and time.

          </p>
        </div>
      </div>
    </div>
     <Contact1/>
    <Copyright/>  
        </>
    )
}