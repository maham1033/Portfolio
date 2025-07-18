// import React from 'react';
// import { useRef } from 'react';
// import './contact.css';
// import { FaLinkedin } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const form=useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_cw1gw67', 'template_m02t61g', form.current, {
//         publicKey: 'iomA-kKyefaNpNmCE',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
  
//       e.target.reset();
//   };
//   return (
//     <section id='contact'>
//       <h5>Get In Touch</h5>
//       <h2>Contact Me</h2>
//       <div className="container contact__container">
//         <div className="contact__options">
//           <article className="contact__option">
//             <MdOutlineEmail className='contact__option-icon'/>
//             <h4>Email</h4>
//             <h5>mahamnadeem1033@gmail.com</h5>
//             <a href="mailto:mahamnadeem1033@gmail.com" target='_blank'>Send a message</a>
//           </article>

//           <article className="contact__option">
//             <FaLinkedin className='contact__option-icon'/>
//             <h4>Linkedin</h4>
//              <a href="https://www.linkedin.com/in/maham-nadeem-970b2623b" target='_blank'>Send a message</a>
            
//           </article>
//         </div>
//         <form ref={form} onSubmit={sendEmail}>
//           <input type="text" name='name' placeholder='Full Name' required />
//           <input type="text" name='email' placeholder='Email' required />
//           <textarea name="message" rows='7' placeholder='Message' required></textarea>
//           <button type='submit' className='btn btn-primary'>Send Message</button>
          
//         </form>

//       </div>
//     </section>
//   )
// }

// export default Contact



import React, { useRef } from 'react';
import './contact.css';
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();

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

        {/* Contact Options with animation */}
        <motion.div
          className="contact__options"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mahamnadeem1033@gmail.com</h5>
            <a href="mailto:mahamnadeem1033@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <FaLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/maham-nadeem-970b2623b" target='_blank'>Send a message</a>
          </article>
        </motion.div>

        {/* Form with animation */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows='7' placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </motion.form>

      </div>
    </section>
  )
}

export default Contact;
