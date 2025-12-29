import React from 'react';
import './Hamburger.css';

const Hamburger = ({ isOpen, toggle }) => {
  return (
    <div
      id="nav-icon3"
      className={isOpen ? 'open' : ''}
      onClick={toggle}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
