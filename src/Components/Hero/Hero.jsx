import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <img src={hero_image} alt="" />
      </div>
      <div className="hero-right">
        <h2>Dầu gội thảo dược</h2>
        <div>
          <p>Another subheading—maybe it's related to the image on the left, or the button below </p>
        </div>
        <div className="hero-buynow-btn">
          <div>Mua ngay</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
