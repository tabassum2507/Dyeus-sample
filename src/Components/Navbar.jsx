import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css"



function Navbar() {
  return <div className='navbar'>
    <ul className="navbar__list">
      <li className='navbar__item'><FontAwesomeIcon icon={faBars} /></li>
      <li className='navbar__item'><FontAwesomeIcon icon={faShoppingCart} /></li>
    </ul>
    <hr />
      
      

  </div>;
}

export default Navbar;
