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
          <li className='menuLink'><Link href="/">Home</Link></li>
          <li className='menuLink'><Link href="/projects">Projects</Link></li>
          <li className='menuLink'><Link href="/skills">Skills</Link></li>
          <li className='menuLink'><Link href="/about">About</Link></li>
          <li className='menuLink'><Link href="/contact">Contact</Link></li>
 
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
              <Link href="/projects" onClick={toggleMobileMenu}>Projects</Link>
            </li>
            <li className="mobile-menu-item">
              <Link href="/skills" onClick={toggleMobileMenu}>Skills</Link>
            </li>
            <li className="mobile-menu-item">
              <Link href="/contact" onClick={toggleMobileMenu}>Contact</Link>
            </li>
            <li className="mobile-menu-item">
              <Link href="/about" onClick={toggleMobileMenu}>About</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Navbar