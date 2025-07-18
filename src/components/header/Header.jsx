import React from 'react';
import './header.css';
import CTA from './CTA';
import me from './me.png';
import HeaderSocials from './HeaderSocials';
import { motion } from 'framer-motion'; // ✅ Import Framer Motion

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h5>Hello I'm</h5>
          <h1>Maham Nadeem</h1>
          <h5>Frontend Developer</h5>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <CTA />
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
  initial={{ x: 30, opacity: 0 }}   // start slightly right
  animate={{ x: 0, opacity: 1 }}    // move to original position
  transition={{ duration: 0.6, delay: 0.5 }}
  style={{ position: 'absolute', left: 0, bottom: '3rem' }} // keeps it in place
>
  <HeaderSocials />
</motion.div>


        {/* IMAGE */}
        <motion.div
          className="me"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img src={me} alt="ME" className="image-container" />
        </motion.div>

        {/* SCROLL DOWN */}
        <motion.a
          href="#contact"
          className="scroll__down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Explore More
        </motion.a>

      </div>
    </header>
  );
};

export default Header;
