// DropdownCustom.js
import React from 'react';
import './DropdownCustom.css'
import { Link } from "react-router-dom";

const DropdownCustom = ({ val }) => {
  return (
    <div className="dropdown-menu-custom">
      {val.map((item, index) => {
        return (
          <div key={index} className={item.cName}>
            <Link to={item.path} className={item.cName}>
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownCustom;

