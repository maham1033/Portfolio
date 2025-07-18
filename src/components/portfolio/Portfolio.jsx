// // import React from 'react';
// // import './portfolio.css';
// // import img1 from './1.png';
// // import img2 from './2.png';
// // import img3 from './3.png';
// // import img4 from './4.png';
// // import img5 from './5.png';
// // import img6 from './6.png';

// // const Portfolio = () => {
// //   return (
// //     <section id='portfolio'>
// //       <h5>My Recent Projects</h5>
// //       <h2>Projects</h2>
// //       <div className="container portfolio__container">
// //         <article className='portfolio__item'>
// //           <div className='portfolio__item-image'>
// //             {/* 1st */}
// //             <img src={img1} alt="" className='modification' />
// //           </div>
// //           <h3>Responsive App Landing Page</h3>
// //           <div className="portfolio__item-cta">

// //           <a href="https://github.com/maham1033/Responsive-App-Landing-Website" target='_blank' className='btn'>Github</a>
// //           <a href="https://maham1033.github.io/Responsive-App-Landing-Website/"  className='btn btn-primary' target='_blank'>Live Demo</a>
// //           </div>
// //         </article>

// //         {/* 2nd */}
// //         <article className='portfolio__item'>
// //           <div className='portfolio__item-image'>
// //             <img src={img2} alt=""  className='modification'/>
// //           </div>
// //           <h3>Responsive Quiz App</h3>
// //           <div className="portfolio__item-cta">

// //           <a href="https://github.com/maham1033/Responsive-Quiz-App" target='_blank' className='btn'>Github</a>
// //           <a href="https://app-rouge-phi.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
// //           </div>
// //         </article>

// //         {/* 3rd */}
// //         <article className='portfolio__item'>
// //           <div className='portfolio__item-image'>
// //             <img src={img3} alt="" className='modification' />
// //           </div>
// //           <h3>Memory Game</h3>
// //           <div className="portfolio__item-cta">

// //           <a href="https://github.com/maham1033/Memory-Game" target='_blank' className='btn'>Github</a>
// //           <a href="https://mem-three.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
// //           </div>
// //         </article>

// //         {/* 4th */}
// //         <article className='portfolio__item'>
// //           <div className='portfolio__item-image'>
// //             <img src={img4} alt="" className='modification' />
// //           </div>
// //           <h3>TIC TAC TOE Game</h3>
// //           <div className="portfolio__item-cta">

// //           <a href="https://github.com/maham1033/Tic-Tac-Toe" target='_blank' className='btn'>Github</a>
// //           <a href="https://maham1033.github.io/Tic-Tac-Toe/" className='btn btn-primary' target='_blank'>Live Demo</a>
// //           </div>
// //         </article>

// //         {/* 5th */}
// //         <article className='portfolio__item'>
// //           <div className='portfolio__item-image'>
// //             <img src={img5} alt=""  className='modification'/>
// //           </div>
// //           <h3>I-Coder Web Application</h3>
// //           <div className="portfolio__item-cta">

// //           <a href="https://github.com/maham1033/iCoder-Web-Application" target='_blank' className='btn'>Github</a>
// //           <a href="https://maham1033.github.io/iCoder-Web-Application/" className='btn btn-primary' target='_blank'>Live Demo</a>
// //           </div>
// //         </article>

// //         {/* 6th */}
// //         <article className='portfolio__item'>
// //           <div className='portfolio__item-image'>
// //             <img src={img6} alt="" className='modification' />
// //           </div>
// //           <h3>Responsive Todo List App</h3>
// //           <div className="portfolio__item-cta">

// //           <a href="https://github.com/maham1033/Responsive-TODO-LIST-APP" target='_blank' className='btn'>Github</a>
// //           <a href="https://responsive-alpha-ten.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
// //           </div>
// //         </article>
// //       </div>
// //     </section>
// //   )
// // }

// // export default Portfolio




// import React from 'react';
// import './portfolio.css';
// import img1 from './1.png';
// import img2 from './2.png';
// import img3 from './3.png';
// import img4 from './4.png';
// import img5 from './5.png';
// import img6 from './6.png';
// import { motion } from 'framer-motion';

// const projectData = [
//   {
//     img: img1,
//     title: 'Responsive App Landing Page',
//     github: 'https://github.com/maham1033/Responsive-App-Landing-Website',
//     demo: 'https://maham1033.github.io/Responsive-App-Landing-Website/',
//   },
//   {
//     img: img2,
//     title: 'Responsive Quiz App',
//     github: 'https://github.com/maham1033/Responsive-Quiz-App',
//     demo: 'https://app-rouge-phi.vercel.app/',
//   },
//   {
//     img: img3,
//     title: 'Memory Game',
//     github: 'https://github.com/maham1033/Memory-Game',
//     demo: 'https://mem-three.vercel.app/',
//   },
//   {
//     img: img4,
//     title: 'TIC TAC TOE Game',
//     github: 'https://github.com/maham1033/Tic-Tac-Toe',
//     demo: 'https://maham1033.github.io/Tic-Tac-Toe/',
//   },
//   {
//     img: img5,
//     title: 'I-Coder Web Application',
//     github: 'https://github.com/maham1033/iCoder-Web-Application',
//     demo: 'https://maham1033.github.io/iCoder-Web-Application/',
//   },
//   {
//     img: img6,
//     title: 'Responsive Todo List App',
//     github: 'https://github.com/maham1033/Responsive-TODO-LIST-APP',
//     demo: 'https://responsive-alpha-ten.vercel.app/',
//   },
// ];

// const Portfolio = () => {
//   return (
//     <section id='portfolio'>
//       <h5>My Recent Projects</h5>
//       <h2>Projects</h2>
//       <div className="container portfolio__container">
//         {projectData.map((project, index) => (
//           <motion.article
//             key={index}
//             className='portfolio__item'
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className='portfolio__item-image'>
//               <img src={project.img} alt={project.title} className='modification' />
//             </div>
//             <h3>{project.title}</h3>
//             <div className="portfolio__item-cta">
//               <a href={project.github} target='_blank' className='btn' rel="noreferrer">Github</a>
//               <a href={project.demo} target='_blank' className='btn btn-primary' rel="noreferrer">Live Demo</a>
//             </div>
//           </motion.article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;





import React, { useState } from 'react';
import './portfolio.css';
import { motion } from 'framer-motion';

import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';
import img9 from './9.png';

const projectData = [
  { id: 1, img: img1, title: 'Responsive App Landing Page', github: 'https://github.com/maham1033/Responsive-App-Landing-Website', demo: 'https://maham1033.github.io/Responsive-App-Landing-Website/' },
  { id: 2, img: img2, title: 'Responsive Quiz App', github: 'https://github.com/maham1033/Responsive-Quiz-App', demo: 'https://app-rouge-phi.vercel.app/' },
  { id: 3, img: img3, title: 'Memory Game', github: 'https://github.com/maham1033/Memory-Game', demo: 'https://mem-three.vercel.app/' },
  { id: 4, img: img4, title: 'TIC TAC TOE Game', github: 'https://github.com/maham1033/Tic-Tac-Toe', demo: 'https://maham1033.github.io/Tic-Tac-Toe/' },
  { id: 5, img: img5, title: 'I-Coder Web Application', github: 'https://github.com/maham1033/iCoder-Web-Application', demo: 'https://maham1033.github.io/iCoder-Web-Application/' },
  { id: 6, img: img6, title: 'Responsive Todo List App', github: 'https://github.com/maham1033/Responsive-TODO-LIST-APP', demo: 'https://responsive-alpha-ten.vercel.app/' },
  { id: 7, img: img7, title: 'Movie Search App', github: 'https://github.com/maham1033/Movie-Search-App', demo: 'https://movie-search-app-3qs6.vercel.app/' },
  { id: 8, img: img8, title: 'Weather App', github: 'https://github.com/maham1033/Weather-App', demo: 'https://weather-app-nbzd.vercel.app/' },
  { id: 9, img: img9, title: 'E-commerce Cart', github: 'https://github.com/maham1033/womens-shopping-cart', demo: 'https://womens-shopping-cart-uv9u.vercel.app/' },
];

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleProjects = showMore ? projectData : projectData.slice(0, 6);

  return (
    <section id='portfolio'>
      <motion.h5 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Recent Projects
      </motion.h5>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="container portfolio__container">
        {visibleProjects.map(({ id, img, title, github, demo }, index) => (
          <motion.article
            key={id}
            className='portfolio__item'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className='portfolio__item-image'>
              <img src={img} alt={title} className='modification' />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} target='_blank' className='btn'>Github</a>
              <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div 
        style={{ textAlign: 'center', marginTop: '2rem' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <button className="btn btn-primary" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less Projects' : 'Show More Projects'}
        </button>
      </motion.div>
    </section>
  );
};

export default Portfolio;

