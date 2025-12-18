import React from 'react'
import logo from '../assets/logo.PNG'
import second from '../assets/logo.PNG'
const Header = () => {
    return (
        <>
            <nav>
                <div className="lft">
                <div className="logo"><img src={second} alt="img" /></div>
                <div className="link">
                    <a href="">About Me</a>
                    <a href="">Portfolio</a>
                    <a href="">Service</a>
                    <a href="">Blog</a>
                    <a href=""></a>
                </div>
                </div>

                <button>Book a Call <i class="ri-arrow-right-up-line"></i></button>
            </nav>

        </>
    )
}

export default Header