import React from 'react';


export default function About(props) {
  return (
        <div className='card'>
          <div className="number">
            {props.about.number}
          </div>
          <div className="card-body">
            <h2>{props.about.header}</h2>
            <p>
            {props.about.paragraph}
            </p>
          </div>
        </div>
  )
}