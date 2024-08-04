import React from 'react';
import Logo from '../images/logo.png'

export default function Header() {
  return (
    <nav className='navigation'>
      
      <img src={Logo} className="my-logo" />
      <ul className='nav-list'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/project">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}