import React from 'react';
import './about.css';
import me from '../header/me.png';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About me" />
          </div>
        </div>
        <div className="about__content">
         <p>Hi, I’m Maham Nadeem, a frontend developer and Computer Engineering student at UET Lahore. I’m passionate about crafting responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React.          
         While I'm passionate about frontend development, I’m excited to expand my skills into full-stack development with the MERN stack in the future,aiming to build dynamic web applications that make a difference.
        
         I value clean, efficient code and thrive in collaborative environments where I can continually learn and innovate. When I’m not coding, I enjoy organizing events and contributing to my university community.
         Feel free to connect with me to explore how we can work together on exciting projects!</p>
         <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
      </section>
  )
}

export default About
