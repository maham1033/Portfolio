import React from 'react';
import './portfolio.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* 1st */}
            <img src={img1} alt="" className='modification' />
          </div>
          <h3>Responsive App Landing Page</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/maham1033/Responsive-App-Landing-Website" className='btn'>Github</a>
          <a href="https://maham1033.github.io/Responsive-App-Landing-Website/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        {/* 2nd */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img2} alt=""  className='modification'/>
          </div>
          <h3>Responsive Quiz App</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/maham1033/Responsive-Quiz-App" className='btn'>Github</a>
          <a href="https://app-rouge-phi.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        {/* 3rd */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img3} alt="" className='modification' />
          </div>
          <h3>Memory Game</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/maham1033/Memory-Game" className='btn'>Github</a>
          <a href="https://mem-three.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        {/* 4th */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img4} alt="" className='modification' />
          </div>
          <h3>TIC TAC TOE Game</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/maham1033/Tic-Tac-Toe" className='btn'>Github</a>
          <a href="https://maham1033.github.io/Tic-Tac-Toe/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        {/* 5th */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img5} alt=""  className='modification'/>
          </div>
          <h3>I-Coder Web Application</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/maham1033/iCoder-Web-Application" className='btn'>Github</a>
          <a href="https://maham1033.github.io/iCoder-Web-Application/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        {/* 6th */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img6} alt="" className='modification' />
          </div>
          <h3>Responsive Todo List App</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/maham1033/Responsive-TODO-LIST-APP" className='btn'>Github</a>
          <a href="https://responsive-alpha-ten.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
