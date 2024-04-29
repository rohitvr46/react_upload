import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from 'react-router-dom';
import "./Navbar1.css";
import "./Dropdown.css";
import { MenuItems } from "./MenuItems";
import MyImage from "./logo2.jpg";
import DropdownCustom from './DropdownCustom';
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from './LinkedInIcon';
import Find from './find.png'

function Navbar1() {
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
    <div className="navbar-head">
    <div className="container1">
      <nav className="navbar ">
        <div className="nav-left-parent">
        <div className="nav-left">
          <Link to="/" className="navbar-logo">
           <div className="img-icon">
           <img src={MyImage} alt="MyImage"/>
           <h1 className="set1">EP<span1 className="special">IC</span1>AL LAYOUTS</h1>
           </div>
         </Link>
        </div>
        </div>
        
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
              ABOUT US
            </Link>
          </li>
          <li
  className="nav-item"
  onMouseEnter={onMouseEnter3}
  onMouseLeave={onMouseLeave3}
>
  <Link
    to="/services"
    className="nav-links1  long"
    onClick={closeMobileMenu}
  >
  IC LAYOUT SERVICES <i className="fas fa-caret-down" />
  </Link>
  {dropdown3 && <DropdownCustom val={MenuItems[3]} />}
</li>
{/* <li className="nav-item">
            <Link to="/techarticles" className="nav-links" onClick={closeMobileMenu}>
              TECH ARTICLES
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/careers" className="nav-links" onClick={closeMobileMenu}>
              CAREERS
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/univrelations" className="nav-links" onClick={closeMobileMenu}>
            UNIVERSITY RELATIONS
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/univrelations" className="nav-links6" onClick={closeMobileMenu}>
            CONTACT US
            </Link>
          </li>
          
</ul>
        <Button />
      </nav>
    </div>
    </div>
  );
}

export default Navbar1;
