import React from 'react';
import Image1 from '../images/image1.jpg'
import Image2 from '../images/image2.jpg'
import Image3 from '../images/image3.jpg'
import Image4 from '../images/image4.jpg'
import Image5 from '../images/image5.jpg'
import Image6 from '../images/image6.jpg'
import Image7 from '../images/image7.jpg'
import Image8 from '../images/image8.jpg'

export default function Project() {
  return (
    <section className='project'> 
      <h2 className='project-header'>Projects</h2>
      <div className='project-info'>
        <div className='project-card card card1'>
          <img src={Image6} />
          <h3>Project 1</h3>
          <p>This is my first airbnb project. The project is similart to an airbn This will ensure that the text inside each .project-card wraps properly when it's too long and fits within the bounds of the card without overflowing.</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card card2'>
          <img src={Image1} alt='image 1' />
          <h3>Project 2</h3>
          <p>This is my first airbnb project. The project is similart to an airbn This will ensure that the text inside each .project-card wraps properly when it's too long and fits within the bounds of the card without overflowing.</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card'>
          <img src={Image2} alt='image 1' />
          <h3>Project 3</h3>
          <p>This is my first airbnb project. The project is similart to an airbn This will ensure that the text inside each .project-card wraps properly when it's too long and fits within the bounds of the card without overflowing.</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card'>
          <img src={Image3} alt='image 1' />
          <h3>Project 4</h3>
          <p>This is my first airbnb project. The project is similart to an airbn This will ensure that the text inside each .project-card wraps properly when it's too long and fits within the bounds of the card without overflowing.</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card'>
          <img src={Image4}alt='image 1' />
          <h3>Project 5</h3>
          <p>This is my first airbnb project. The project is similart to an airbn This will ensure that the text inside each .project-card wraps properly when it's too long and fits within the bounds of the card without overflowing.</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card'>
          <img src={Image5} alt='image 1' />
          <h3>Project 6</h3>
          <p>This is my first airbnb project. The project is similart to an airbn This will ensure that the text inside each .project-card wraps properly when it's too long and fits within the bounds of the card without overflowing.</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card'>
          <img src={Image7} alt='image 1' />
          <h3>Project 6</h3>
          <p>This is my first airbnb project. The project is similart to an airbn This will ensure that the text inside each .project-card wraps properly when it's too long and fits within the bounds of the card without overflowing.</p>
          <button className="btn">View Project</button>
        </div>

        <div className='project-card card'>
          <img src={Image8} alt='image 1' />
          <h3>Project 6</h3>
          <p>This is my first airbnb project. The project is similart to an airbn This will ensure that the text inside each .project-card wraps properly when it's too long and fits within the bounds of the card without overflowing.</p>
          <button className="btn">View Project</button>
        </div>
      </div>
      
      
    </section>
  )
}