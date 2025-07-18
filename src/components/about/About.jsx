import React from 'react';
import './about.css';
import me from '../header/me.png';
import { motion } from 'framer-motion'; // ✅ Framer Motion

const About = () => {
  return (
    <section id='about'>
      
      {/* ✅ Animated Headings */}
      <motion.div
        className="about__heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </motion.div>

      {/* ✅ Animated Container */}
      <motion.div
        className="container about__container"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About me" />
          </div>
        </div>

        {/* Text Content */}
        <div className="about__content">
          <p>
            Hi, I’m Maham Nadeem, a Computer Engineering graduate from UET Lahore with a strong passion for software development.
            I specialize in creating responsive, user-friendly web interfaces with clean, efficient code. My core skills include HTML, CSS, JavaScript, React.js and I also have hands-on experience with Java and SQL (RDBMS), allowing me to work comfortably across the frontend and logic-layer of applications.
            <br /><br />
            I love building intuitive UIs and bringing ideas to life through well-structured and maintainable code. I'm always
            eager to learn, take on challenges and grow within collaborative teams that value innovation and creativity.
            Beyond coding, I'm actively involved in organizing events and contributing to university initiatives.
            <br /><br />
            Let’s connect and collaborate on exciting tech projects!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
