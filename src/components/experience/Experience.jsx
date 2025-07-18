// import React from 'react';
// import   './experience.css';
// import { BsPatchCheckFill } from "react-icons/bs";

// const Experience = () => {
//   return (
//     <section id='experience'>
//       <h5>What Skills I have</h5>
//       <h2>My Experience</h2>
//       <div className="container experience__container">
//         <div className="experience__frontend">
//           <h3>Technical Skills</h3>
//           <div className="experience__content">
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//               <h4>HTML</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//              <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//               <h4>CSS</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//              <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//               <h4>JavaScript</h4>
//               {/* <small className='text-light'>Intermediate</small> */}
//               </div>
//             </article>
//              <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//              <div>
//              <h4>BootStrap</h4>
//              {/* <small className='text-light'>Experienced</small> */}
//              </div>
//             </article>
//              <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//               <h4>Tailwind</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//               <h4>React</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//               <h4>Java</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//               <div>
//               <h4>OOP</h4>
//               {/* <small className='text-light'>Experienced</small> */}
//               </div>
//             </article>
//           </div>
//         </div>
     
//         <div className="experience__backend">
//           <h3>Soft Skills</h3>
//           <div className="experience__content">
//             <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//              <div>
//              <h4>Teamwork and Collaboration</h4>
//              {/* <small className='text-light'>Basic</small> */}
//              </div>
//             </article>
//              <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//             <div>
//             <h4>Time Management</h4>
//             {/* <small className='text-light'>Basic</small> */}
//             </div>
//             </article>
//              <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//              <div>
//              <h4>Problem-Solving</h4>
//              {/* <small className='text-light'>Basic</small> */}
//              </div>
//             </article>
//              <article className='experience__details'>
//               <BsPatchCheckFill className='experience__details-icon'/>
//              <div>
//              <h4>Adaptability</h4>
//              {/* <small className='text-light'>Basic</small> */}
//              </div>
//             </article>
//              </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Experience



import React from 'react';
import './experience.css';
import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'React',
  'Java','Git', 'GitHub','MySQL'
];


const Experience = () => {
  return (
    <section id='experience'>
      <motion.div
        className="experience__heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h5 className="centered-heading">What Skills I Have</h5>
        <h2 className="centered-heading">My Experience</h2>
      </motion.div>

      <motion.div
        className="container skill__tags-container"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="skill__tags">
          {skills.map((skill, index) => (
            <span key={index} className="skill__tag">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="skill__logos-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="marquee-box">
  <div className="skill__logos-scroll">
    {[...skills, ...skills].map((skill, index) => (
      <img
        key={index}
        src={`/icons/${skill.replace(/ /g, '').toLowerCase()}.png`}
        alt={skill}
        title={skill}
        className="skill-logo"
      />
    ))}
  </div>
</div>



      </motion.div>
    </section>
  );
};

export default Experience;


