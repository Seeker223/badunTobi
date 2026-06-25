'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Work', href: '#work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' }
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  }

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Badun Oluwatobi</div>
        <div>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Badun Oluwatobi</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </div>
          <ul className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li className="menu-close" onClick={closeMenu}>
              <i className="fas fa-times" />
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
