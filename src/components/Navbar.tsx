"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../app/styles/navbar.css";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar-div'>

      {/* Logo Section */}
      <div className='logo'>
        Ali Yousuf
      </div>

      {/* Desktop Menu */}
      <div className='desktop-menu'>
        <ul className='menu-list'>
          <li className='menuLink'><a href="/">Home</a></li>
          <li className='menuLink'><a href="/projects">Projects</a></li>
          <li className='menuLink'><a href="/skills">Skills</a></li>
          <li className='menuLink'><a href="/about">About</a></li>
          <li className='menuLink'><a href="/contact">Contact</a></li>
 
        </ul>

        <FiMenu className='md:hidden'/>

      </div>

      {/* Mobile Menu Icon */}

      <div className="mobile-menu-icon">
        {isMobileMenuOpen? (
          <FiX onClick={toggleMobileMenu} size={24} className="mobile-icon" />
        ) : (
          <FiMenu onClick={toggleMobileMenu} size={24} className="mobile-icon"/>
        )}
      </div>

      {/* Mobile Menu */}
        {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">
              <Link href={"/"} onClick={toggleMobileMenu}>Home</Link>
            </li>
            <li className="mobile-menu-item">
              <a href="/projects" onClick={toggleMobileMenu}>Projects</a>
            </li>
            <li className="mobile-menu-item">
              <a href="/skills" onClick={toggleMobileMenu}>Skills</a>
            </li>
            <li className="mobile-menu-item">
              <a href="/contact" onClick={toggleMobileMenu}>Contact</a>
            </li>
            <li className="mobile-menu-item">
              <a href="/about" onClick={toggleMobileMenu}>About</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Navbar