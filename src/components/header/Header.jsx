import React from 'react';
import './header.css';
import CTA from './CTA';
import me from './me.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header> {/* Changed to lowercase "header" */}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Maham Nadeem</h1>
        <h5 className="text-light">MERN Stack Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={me} alt="ME" className='image-container'/>
        </div>
        <a href="#contact" className='scroll__down'>Explore More</a>
      </div>
    </header>
  );
}

export default Header;
