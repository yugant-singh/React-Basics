import React from 'react'
import second from '../assets/pic1.jpeg'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="content">
            <div className="project-count">
                <div className="task">
                    <h4>+200</h4>
                    <p>Project Completed</p>
                </div>
                <div className="task">
                    <h4>+50</h4>
                    <p>Satrtup raised</p>
                </div>
            </div>
            <div className="intro">
                <h1>Hello</h1>
                <p> -- Its Yugant Singh a React Developer</p>
            </div>
            <button id='btn'>Scroll Down <i class="ri-arrow-down-line"></i></button>
        </div>
        <div className="img-section">
            <img src="https://i.pinimg.com/736x/a1/18/2f/a1182f1dcb1e9afda517026981fa826e.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero