import React from 'react';
import { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cw1gw67', 'template_m02t61g', form.current, {
        publicKey: 'iomA-kKyefaNpNmCE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mahamnadeem1033@gmail.com</h5>
            <a href="mailto:mahamnadeem1033@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+92-336-4030842</h5>
            <a href="https://api.whatsapp.com/send?phone=923364030842" target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="text" name='email' placeholder='Email' required />
          <textarea name="message" rows='7' placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          
        </form>

      </div>
    </section>
  )
}

export default Contact
