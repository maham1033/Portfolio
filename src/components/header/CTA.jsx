import React from 'react';
import cv from './cv.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Access CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Collaborate</a>
      
    </div>
  )
}

export default CTA
