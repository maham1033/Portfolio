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
            <h3>Frontend Development (React.js)</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive design for all screen sizes (mobile, tablet, desktop)</p>
              </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Single-page applications (SPAs) with React Router</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>State management using Redux or Context API</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration of APIs for real-time data updates</p>
              </li>      

          </ul>
        </article>


      {/* 2nd Service */}
      <article className='service'>
          <div className="service__head">
            <h3>Backend Development (Node.js & Express)</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>RESTful API development</p>
              </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User authentication and security (JWT, OAuth)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database management with MongoDB</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>Real-time applications using WebSockets</p>
              </li>      

          </ul>
        </article>

        {/* 3rd Service */}
        <article className='service'>
          <div className="service__head">
            <h3>Full-Stack Web Application Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>End-to-end development of MERN stack applications</p>
              </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deployment and hosting ( Netlify, or custom servers)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ongoing support and maintenance.</p>
              </li>
             
             </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
