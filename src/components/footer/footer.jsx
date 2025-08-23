import LogoFooter from '../../assets/logos/LogoFooter.png';
import TesseractGroup from '../../assets/logos/TesseractGroup.svg';
import './footer.css';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className="footer-content-wrapper" >
        <img className="logo-footer" alt="Logo Su Lash Designer" src={LogoFooter} />

        <div className="social-links">
          <a href='https://wa.link/sxlltm' target="_blank" rel="noopener noreferrer">
             <FaWhatsapp size={32} color='#FF7EAF' />
          </a>
          <a href='https://www.instagram.com/sulashdesigner/' target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} color='#FF7EAF' />
          </a>
          <a href='https://www.tiktok.com/@sulashdesigner' target="_blank" rel="noopener noreferrer">
            <FaTiktok size={32} color='#FF7EAF' />
          </a>
        </div>
      </div>

      <img className="tesseract-logo" alt="Logo Tesseract Group" src={TesseractGroup}/>
    </footer>
  );
}