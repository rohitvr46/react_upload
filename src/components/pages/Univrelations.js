import Navbar1 from "../Navbar1";
import { useEffect } from "react";
import './Univrelations.css'
import Contact from "../Contact";
import Copyright from "../Copyright";
import Student from '../students.jpg'
import Research from '../researchers.jpg'
import Educator from '../educators.jpg'
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
import Contact1 from "../Contact1";
 
export default function Univrelations(){

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
      <div className="full-flip">
       <div className="flip-maincontainer">
        <div className="flip-thecard">
          <div className="flip-thefront">
            <h1 className="flip-thefront-head">STUDENTS</h1>
          </div>
          <div className="flip-theback">
            <p className="flip-theback-para1">Utilize the EPICAL LAYOUTS Academic Network's advantages to master IC Design technologies and get the necessary EDA skills.</p>
          </div>
        </div>
       </div>
       <div className="flip-maincontainer">
        <div className="flip-thecard">
          <div className="flip-thefront1">
            <h1 className="flip-thefront-head">EDUCATORS</h1><br/>
          </div>
          <div className="flip-theback">
            <h1></h1>
            <p className="flip-theback-para2">Introduce the IC Design training platform offered by the EPICAL LAYOUTS Academic Network into your classroom to foster the next generation of innovators.</p>
          </div>
        </div>
       </div>
       <div className="flip-maincontainer">
        <div className="flip-thecard">
          <div className="flip-thefront2">
            <h1 className="flip-thefront-head">RESEARCHERS</h1>
          </div>
          <div className="flip-theback">
            <p className="flip-theback-para3">Use EPICAL LAYOUTS Academic Network to unleash your creativity and generate ground-breaking discoveries.</p>
          </div>
        </div>
       </div>
       </div>
       <div className="Uni-highlight">
        <h1 className="Uni-highlight1">HIGHLIGHTS</h1>
       </div>
       <div className="uni-full">
       <div className="Uni-grad-and-intern">
        <div className="grad-imgs">
        <img src={Student} alt="first-img" className="grad-img"/>
        </div>
        <div className="gard-head-and-para">
          <h1 className="gard-head">Graduates and Interns</h1>
        <p className="grad-para">EPICAL LAYOUTS has something for everyone, whether you're a student looking to establish a career or an intern hoping to learn from the finest in the business. You will have a significant impact on the technology that underpin modern living.</p>
        </div>

       </div>
       </div> 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
       <div className="uni-full">
       <div className="Uni-grad-and-intern">
        
        <div className="gard-head-and-para1">
          <h1 className="gard-head">Educators</h1>
        <p className="grad-para">Together with academic institutions and instructors, EPICAL LAYOUTS has created academic materials to use in the classroom. Add depth to your lectures by utilizing our training techniques.</p>
        </div>
        <div className="grad-imgs1">
        <img src={Educator} alt="first-img" className="grad-img1"/>
        </div>

       </div>
       </div> 
       <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="uni-full3">
       <div className="Uni-grad-and-intern">
        <div className="grad-imgs">
        <img src={Research} alt="first-img" className="grad-img"/>
        </div>
        <div className="gard-head-and-para">
          <h1 className="gard-head">Researchers</h1>
        <p className="grad-para">Join hands with us to develop an innovative approach that will enable you to market your designs, reach a larger audience, or collaborate with others to solve current and future challenges.</p>
        </div>

       </div>
       </div> 
       <Contact1/>
       <Copyright/> 
        </>
    )
}