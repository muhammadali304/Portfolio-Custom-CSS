"use client";

import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/projects.css";

export default function Projects  ()  {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='projects-div'>

        <div className='projects-title'>
          <h1><b>My Projects</b></h1>
        </div>

        <div className="projects-grid" data-aos="fade-down" data-aos-duration="750" data-aos-delay="100">

          <div className='project-card'>
              <img 
                src="/Countdown.jpg" 
                alt="Countdown Timer"
                className='project-image' 
                /> 

              <div className="project-info">
                <h2 className='project-name'>Countdown Timer</h2> 
                <p className='project-description'>A Next.js and Typescript powered website to track your time with an interactive countdown.</p>
              </div>
              

              <div className='tech-stack'>
                <p className='tech'>Next JS</p>
                <p className='tech'>Node</p>
                <p className='tech'>CSS</p>
                <p className='tech'>Typescript</p>
              </div>    
          </div>
        

        
          <div className='project-card'>
              <img 
              src="/Static Resume.jpg" 
              alt="Static Resume"
              className='project-image'
              /> 

              <div className="project-info">
                  <h2 className='project-name'>Static Resume</h2> 
                  <p className='project-description'>A Typescript based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.</p>
              </div>

              <div className='tech-stack'>
                <p className='tech'>HTML</p>
                <p className='tech'>Node</p>
                <p className='tech'>CSS</p>
                <p className='tech'>Typescript</p>
              </div>                        
          </div>
        </div>

    </div>
  )
}