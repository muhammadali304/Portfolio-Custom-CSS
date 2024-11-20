"use client";

import React, { useEffect } from 'react'
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import "../app/styles/hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    
    <div className='hero-div'>

      <div className='hero-image-div'>
        
        <div className='profile-picture'>
          <Image 
            src= "/Profile Picture.jpg"
            alt='Profile Picture'
            height={350}
            width={350}
          />
        </div>

      </div>

      <div className='hero-text-div'>

        <div className='hero-text' data-aos="zoom-in" data-aos-duration="1000" >
          <h1>I am <br /> Ali <br /> Yousuf</h1>
        </div>

      </div>

    </div>

  )
}

export default Hero
