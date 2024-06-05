import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className='hero'>
      <div className='content'>
        <div className='title'>
          <h1>LET;S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your fitness journey starts here</p>
          <p>Unlock your potential</p>
        </div>
        <div className="buttons">
          <button><Link to="/register">

            Start Your Journey</Link></button>

            
          <button>Explore Plans</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
