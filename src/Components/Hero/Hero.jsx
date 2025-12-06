import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/smartphones.jpg'

console.log("HERO LOADED");

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Everyday Offers</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>Get 10% off on your first purchase</p>
        </div>
        <div className="hero-latest-btn">
            <div> Latest piece</div>
            <img src={arrow_icon} alt="" />

        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />

      </div>
        </div>
      
  )
}

export default Hero
