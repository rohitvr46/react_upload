import React ,{useEffect} from "react";
import Navbar from "../Navbar";
import './Contactus.css'
import Contact1 from "../Contact1";
import Copyright from '../Copyright';
import Pc from '../EPIC.jpg';
import { useState } from "react";
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
import Navbar1 from "../Navbar1";

export default function Contactus(){
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
          <div>
            <div className="cont-info">
                <h1 className="simp">OUR INFORMATION</h1>
            </div>
            <div className="cont-info-full">
                <img src={Pc} alt="logo" className="info-img" />
                <p className="cont-cont">
                    Corporate Office: Chennai, India<br /><br />
                    Phone No: +91 78068 65817<br /><br />
                    Mail: admin@epicallayouts.com<br /><br /><br />
                    For New Business: prashanth@epicallayouts.com
                </p>
            </div>
            <div className="contact">
                <br/>
            </div>
            <div className="contactform">
                <form action="https://api.web3forms.com/submit" method="POST">
                    <h1 className="head-heading simp">REACH US ANYTIME</h1><br />
                    <div className="form-cent">
                    <input type="hidden" name="access_key" value="930a6bb8-bb00-4ddb-b1d8-b93a4082ecf7"/>

                        <label className="contact-form-font" htmlFor="subject">Subject</label>
                        <input  type="text" id="subject" name="subject" placeholder="Type New Enquiry form" className="cont-form-text" required/>

                        <label className="contact-form-font" htmlFor="fname">Full Name</label>
                        <input type="text" id="fname" name="fullname" placeholder="Your name.." className="cont-form-text" required/>

                        <label className="contact-form-font" htmlFor="email">E-mail</label>
                        <input type="text" id="email" name="email" placeholder="Your email id.." className="cont-form-text" required/>

                        <label className="contact-form-font" htmlFor="company">Company/University</label>
                        <input type="text" id="company" name="company" placeholder="Your Company.." className="cont-form-text" required/>

                        <label name = "Choices" className="contact-form-font">Select for Queries</label>
                        <select name = "Choices" className="cont-form-text" required>
                            <option></option>
                            <option className="contact-form-font">Job Opportunity</option>
                            <option className="contact-form-font">Internship</option>
                            <option className="contact-form-font">Business</option>
                        </select>

                        <label className="contact-form-font" htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="phone" placeholder="Your Phone Number.." className="cont-form-text" required/>

                        <label className="contact-form-font" htmlFor="question">Questions/Remarks</label>
                        <textarea id="message" name="message" placeholder="Write something.." style={{ height: '200px' }} className="cont-form-text" required></textarea>

                        <label className="contact-form-font" htmlFor="file-upload">Upload the file in .pdf extensions</label><br/><br/>
                        <input className="contact-form-font" type="file" id="myFile" name="filename" required></input><br/><br/>

                        <input type="checkbox" id="vehicle1" name="checkbox" value="true" required/>
                        <label className="contact-form-font" htmlFor="vehicle1"> I understand that Epical Layouts will use my information to contact me regarding their solution and I agree with the privacy policy.</label><br /><br />
                        

                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div><br />
            <br />
            <br />
            <br />
            <div className="foot1">
                <h1 className="foot1-simp">LOCATION</h1><br /><br /><br /><br /><br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.781489247951!2d80.16027609999999!3d12.9217611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267748c484737%3A0x66e0b1e6956f0ebc!2sEPICAL%20LAYOUTS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1696770316350!5m2!1sen!2sin" width="1100" height="400" style={{ border: '0', paddingLeft: '470px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <br /><br /><br /><br /><br /><br />
            </div>
            </div>
            <Contact1/>
            <Copyright/>
        </>
    )
}