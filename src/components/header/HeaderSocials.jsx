import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/maham-nadeem-970b2623b" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/maham1033" target='_blank'><FaGithub/></a>
      
    </div>
  )
}

export default HeaderSocials
