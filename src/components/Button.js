import './Button.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function Button(){
    return(
        <div className='button-position'>
        <Link to='/contactus'>
            <button className='btn'>CONTACT US</button>
        </Link>
        </div>
    )
}