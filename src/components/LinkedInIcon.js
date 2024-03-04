import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { hover } from '@testing-library/user-event/dist/hover';

const LinkedInIcon = () => {
  return (
    <FontAwesomeIcon icon={faLinkedin} size="10px" style={{ borderRadius: '50%', color: '#06ce30',width: '30px', height: '30px',marginLeft:'1px' ,cursor:'pointer'}}/>
  );
};

export default LinkedInIcon;
