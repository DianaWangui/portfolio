import React from 'react';

export default function Hero() {
  return (
    <section className='hero-section'>
      <div className='text-container'>
        <h2 className='hero-header1'>Hi, 👋 I'm Diana Wangui</h2>
        <h2 className='hero-header2'>A Software Engineer 💻</h2>
        <h2 className='hero-header2'>Welcome to my Portfolio</h2>
        <div className='hero-btn'>
        <a href="#project-details" className="button">View Project</a>
        </div>
      </div>
      <div className='animation-container'>
        {/* Will add anime tech-themed content */}
        <div className='floating-element'></div>
        <div className='floating-element'></div>
        <div className='floating-element'></div>
      </div>
    </section>
  )
}
