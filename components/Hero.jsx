import React from 'react';

export default function Hero({dark}) {
    return (
        <div className={`page hero ${dark ? "dark" : ""}`} id="hero">
            <div className="hero-image-container">
                <img className="hero-image" src="../images/portrait_LA_night.jpg" />
                <div className="hero-border"></div>
            </div>
            <div className="hero-text">
                <h1 className="hero-name">Hey, I'm Shawn</h1>
                <p>
                    Welcome to my website! I'm a dedicated full stack developer with a focus on creating exceptional digital experiences that are robust, accessible, responsive.
                    I have been creating enterprise-grade web applications for 2 years and strive to explore new ways of bringing creative digital solutions to life.
                </p>
                <div className="hero-location">
                    <img alt="Location Pin" className="hero-location-icon icon" src="../icons/location.svg" />
                    <p>Palo Alto, California</p>
                </div>
                <div className="hero-socials">
                    <a href="https://github.com/shawn-yx-liu/" target="_blank">
                        <img className="hero-social-icon icon" src="../icons/github.svg" />
                    </a>
                    <a href="https://www.linkedin.com/in/shawn-yx-liu/" target="_blank">
                        <img className="hero-social-icon icon" src="../icons/linkedin.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}