'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header py-3">
      <div className="header__container">
        {/* Brand Logo */}
        <div className="header__brand">
          <Link href="/" className="header__logo-link">
            <img 
              src="/images/resources/logo-5.png" 
              alt="Company Logo" 
              className="header__logo" 
            />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className={`header__menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span className="header__menu-icon"></span>
        </button>
      </div>

      {/* Nav Menu */}
      <div className={`header__nav-container ${isMenuOpen ? 'is-open' : ''}`}>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item nav__item--current">
              <Link href="/" className="nav__link" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav__item">
              <Link href="/register" className="nav__link" onClick={closeMenu}>About Us</Link>
            </li>
            <li className="nav__item">
              <Link href="#" className="nav__link" onClick={closeMenu}>Contact</Link>
            </li>
            <li className="nav__item">
              <Link href="/login" className="nav__link" onClick={closeMenu}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Fullscreen Overlay */}
      {isMenuOpen && (
        <div className="header__overlay" onClick={closeMenu}></div>
      )}
    </header>
  )
}

export default Header
