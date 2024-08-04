import React from 'react';


export default function About() {
  return (
    <div className='about-page'>
      <h2 className="about-header">My Expertise</h2>
      <div className="about-card">
        <div className='card'>
          <div className="number">
            01
          </div>
          <div className="card-body">
            <h2>Web development</h2>
            <p>
            I create awesome websites and also the fix technical aspects, such as its performance and capacity.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className="number">
            02
          </div>
          <div className="card-body">
            <h2>Creative Design</h2>
            <p>
            I specialize in creating visually stunning websites  that not only capture attention but also provide exceptional user experiences.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className="number">
            03
          </div>
          <div className="card-body">
            <h2>Responsive Design</h2>
            <p>
            I specialize in creating visually stunning website, using the best technologies and frameworks to make the best responsive website that spreads across all device.
            </p>
          </div> 
        </div>

        <div className='card'>
          <div className="number">
            03
          </div>
          <div className="card-body">
            <h2>Responsive Design</h2>
            <p>
            I specialize in creating visually stunning website, using the best technologies and frameworks to make the best responsive website that spreads across all device.
            </p>
          </div> 
        </div>
      </div>
    </div>
  )
}