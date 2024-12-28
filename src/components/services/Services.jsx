import React from 'react';
import './services.css';
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id='services'>
      
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            {/* 1st Service */}
            <h3>Frontend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I specialize in building modern and responsive web interfaces using HTML, CSS, JavaScript, and React. </p>
              </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Whether it’s a sleek landing page, an interactive web app, or a fully dynamic website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can deliver high-quality solutions tailored to your needs.</p>
              </li>
                  

          </ul>
        </article>


      {/* 2nd Service */}
      <article className='service'>
          <div className="service__head">
            <h3>Responsive Web Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I design websites that adapt seamlessly across different devices, ensuring an optimal experience for all users</p>
              </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> With a focus on clean and efficient code, I create designs that are both aesthetically pleasing and functional.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Database management with MongoDB</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>Real-time applications using WebSockets</p>
              </li>       */}

          </ul>
        </article>

        {/* 3rd Service */}
        <article className='service'>
          <div className="service__head">
            <h3>Community and Event Engagement</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>leadership experience in ACM and Zimal UET Lahore </p>
              </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I’m available for event coordination, organizing workshops, and community engagement within the tech space.</p>
            </li>
           
             </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
