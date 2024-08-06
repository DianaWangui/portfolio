import React from 'react';
import Logo from '../images/logo.png'

export default function Header() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="personal-info">
            <img src={Logo} className="footer-logo" />
            <h2>Diana</h2> 
          </div>
          <p>Diana Wangui is a software developer from Nairobi, Kenya with passion for building beautiful and functional websites</p>
        </div>
        <div className="footer-socials">
          <h2>Socials</h2>
          <ul>
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">LinkdIn</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contacts</h2>
          <ul>
            <li>Phone Number: 0743966928</li>
            <li>Email: dianawanguikt048@gmail.com</li>
            <li>Website: www.diana-wangui.tech</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}