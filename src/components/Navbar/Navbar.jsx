import { useState } from 'react';
import { Link } from 'react-scroll';
import LanguageSelector from "./LanguageSelector";
import Button from '../Button/Button'; 
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('accueil');

  const menuItems = [
    { label: 'ACCUEIL', to: 'accueil' },
    { label: 'À PROPOS', to: 'a-propos' },
    { label: 'NOS LOGEMENTS', to: 'nos-logements' },
    { label: 'NOS SERVICES', to: 'nos-services' },
    { label: 'GALERIE', to: 'galerie' },
    { label: 'AVIS', to: 'avis' },
    { label: 'CONTACT', to: 'contact' },
  ];

  return (
    <nav className="navbar" >
      <div className="navbar-logo">
        <img 
          src="/public/images/logo (3).png" 
          alt="Stay Living Luxe" 
          className="logo-img"
        />
      </div>

      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li 
            key={item.to} 
            className={`menu-item ${activeLink === item.to ? 'active' : ''}`}
          >
            <Link 
              to={item.to}
              smooth={true}        
              duration={800}        
              offset={-90}          
              spy={true}            
              onSetActive={() => setActiveLink(item.to)} 
              onClick={() => setActiveLink(item.to)}     
              className="menu-link"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar-actions">
        <Button variant="primary" className="btn-reserve">
          RÉSERVER
        </Button>
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Navbar;