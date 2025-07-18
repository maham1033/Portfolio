import React from 'react';
import './footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer>
      <motion.a 
        href="#" 
        className='footer__logo'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        MAHAM NADEEM
      </motion.a>

      <motion.ul 
        className='permalinks'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </motion.ul>

      <motion.div 
        className='footer__copyright'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <small>&copy; 2024 Maham Nadeem. All rights reserved.</small>
      </motion.div>
    </footer>
  );
};

export default Footer;
