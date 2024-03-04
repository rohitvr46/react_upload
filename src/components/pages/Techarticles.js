import React, { useState } from "react";
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
import Construction from '../construction.png';
import Navbar1 from "../Navbar1";


export default function Techarticles(){
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
        history.push('/services');
      } 
      else if (lowerCaseTerm === 'tech articles') {
        history('/techarticles');
      } else if (lowerCaseTerm === 'careers') {
        history('/careers');
      } else if (lowerCaseTerm === 'university relations') {
        history('/univrelations');
      }
      else if (lowerCaseTerm === 'semi custom') {
        history.push('/semi-custom');
      } else if (lowerCaseTerm === 'high voltage') {
        history.push('/high-voltage');
      }
      else if (lowerCaseTerm === 'mixed signal') {
        history.push('/mixed-signal');
      }
      else if (lowerCaseTerm === 'standard cell') {
        history.push('/standard-cell');
      }
    };
  return (
    <>
    <Navbar1/>
    
        </>
    )
}