import LogoFooter from '../../assets/logos/LogoFooter.svg';
import TesseractGroup from '../../assets/logos/TesseractGroup.svg';

import React, { Component } from 'react';

import './footer.css';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className="footer-container__div" >
        <img className="logo-footer" src={LogoFooter} />

        <div className="footer-container-div_botoes">
          <a href='https://wa.link/sxlltm'>
             <FaWhatsapp size={32} color='#FF7EAF' />
          </a>
          <a href='https://www.instagram.com/sulashdesigner/'>
            <FaInstagram size={32} color='#FF7EAF' />
          </a>
          <a>
            <FaFacebookF size={32} color='#FF7EAF' />
          </a>
        </div>
      </div>

      <img src={TesseractGroup}/>
    </footer>
  );
}