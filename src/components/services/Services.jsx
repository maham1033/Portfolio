// import React from 'react';
// import './services.css';
// import { BiCheck } from "react-icons/bi";
// const Services = () => {
//   return (
//     <section id='services'>
      
//       <h5>What I Offer</h5>
//       <h2>Services</h2>
//       <div className="container services__container">
//         <article className='service'>
//           <div className="service__head">
//             {/* 1st Service */}
//             <h3>Frontend Development</h3>
//           </div>
//           <ul className='service__list'>
//             <li>
//               <BiCheck className='service__list-icon'/>
//               <p>I specialize in building modern and responsive web interfaces using HTML, CSS, JavaScript, and React. Whether it’s a sleek landing page, an interactive web app, or a fully dynamic website, I can deliver high-quality solutions tailored to your needs. </p>
//               </li>
//             {/* <li>
//               <BiCheck className='service__list-icon'/>
//               <p> Whether it’s a sleek landing page, an interactive web app, or a fully dynamic website.</p>
//             </li>
//             <li>
//               <BiCheck className='service__list-icon'/>
//               <p>I can deliver high-quality solutions tailored to your needs.</p>
//               </li> */}
                  

//           </ul>
//         </article>


//       {/* 2nd Service */}
//       <article className='service'>
//           <div className="service__head">
//             <h3>Responsive Web Design</h3>
//           </div>
//           <ul className='service__list'>
//             <li>
//               <BiCheck className='service__list-icon'/>
//               <p>I design websites that seamlessly adapt across different devices, ensuring an optimal experience for all users. With a focus on clean and efficient code, I create designs that are both aesthetically pleasing and functional.</p>
//               </li>
//             {/* <li>
//               <BiCheck className='service__list-icon'/>
//               <p> With a focus on clean and efficient code, I create designs that are both aesthetically pleasing and functional.</p>
//             </li> */}
//             {/* <li>
//               <BiCheck className='service__list-icon'/>
//               <p>Database management with MongoDB</p>
//               </li>
//               <li>
//               <BiCheck className='service__list-icon'/>
//               <p>Real-time applications using WebSockets</p>
//               </li>       */}

//           </ul>
//         </article>

//         {/* 3rd Service */}
//         <article className='service'>
//           <div className="service__head">
//             <h3>Community and Event Engagement</h3>
//           </div>
//           <ul className='service__list'>
//             <li>
//               <BiCheck className='service__list-icon'/>
//               <p>With leadership experience in ACM and Zimal UET Lahore, I’m available for event coordination, organizing workshops, and community engagement within the tech space.</p>
//               </li>
//             {/* <li>
//               <BiCheck className='service__list-icon'/>
//               <p>I’m available for event coordination, organizing workshops, and community engagement within the tech space.</p>
//             </li> */}
           
//              </ul>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default Services










import React from 'react';
import './services.css';
import { BiCheck } from "react-icons/bi";
import { motion } from 'framer-motion';

const fadeVariantLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const fadeVariantRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const Services = () => {
  return (
    <section id='services'>
      <h5>Where I Gained Experience</h5>
      <h2>Experience</h2>

      <motion.div 
        className="container services__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* Internship 1 */}
        <motion.article 
          className='service' 
          variants={fadeVariantLeft}
        >
          <div className="service__head">
            <h3>Frontend Intern - CodSoft<br/>Aug 2023 - Sep 2023</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/><p>Designed a visually appealing landing page for Traveler's Heaven using HTML,CSS & Javascript.</p></li>
            <li><BiCheck className='service__list-icon'/><p>Built a fully functional memory game with card-matching mechanics using HTML, CSS and JavaScript.</p></li>
            <li><BiCheck className='service__list-icon'/><p>Improved DOM manipulation and core JavaScript logic implementation.</p></li>
          </ul>
        </motion.article>

        {/* Internship 2 */}
        <motion.article 
          className='service' 
          variants={fadeVariantRight}
        >
          <div className="service__head">
            <h3>Frontend Intern - Prodigy Infotech<br/>Sep 2023 - Oct 2023</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/><p>Created a responsive landing page for AppWave with modern sections like Features, About, and Pricing.</p></li>
            <li><BiCheck className='service__list-icon'/><p>Built a Tic Tac Toe game using HTML, CSS, and JavaScript with turn alerts and reset functionality.</p></li>
            <li><BiCheck className='service__list-icon'/><p>Developed a dynamic quiz app enhancing user interaction and score handling.</p></li>
          </ul>
        </motion.article>

      </motion.div>
    </section>
  );
}

export default Services;




