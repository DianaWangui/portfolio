import React from 'react';
import Image from '../deecopy.jpg'

export default function Project() {
  return (
    <section className='project'> 
      <h2 className='project-header'>Projects</h2>
      <div className='project-info'>
        <div className='project-card card card1'>
          <img src={Image} />
          <h3>Project 1</h3>
          <p>This is my first airbnb project. The project is similart to an airbn This will ensure that the text inside each .project-card wraps properly when it's too long and fits within the bounds of the card without overflowing.</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card card2'>
          <img src={Image} />
          <h3>Project 2</h3>
          <p>Project description</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card'>
          <img src={Image} />
          <h3>Project 3</h3>
          <p>Project description</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card'>
          <img src={Image}/>
          <h3>Project 4</h3>
          <p>Project description</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card'>
          <img src={Image}/>
          <h3>Project 5</h3>
          <p>Project description</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card'>
          <img src={Image}/>
          <h3>Project 6</h3>
          <p>Project description</p>
          <button className="btn">View Project</button>
        </div>
      </div>
      
      
    </section>
  )
}