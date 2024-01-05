import React from 'react';

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero-image" src="../images/portrait_headshot.png" />
            <div className="hero-border"></div>
            <div className="hero-text">
                <h1 className="hero-name">Hey, I'm Shawn</h1>
                <p>
                    I'm a frontend-leaning full stack developer with a focus on creating exceptional digital experiences that are accessible, visually appealing, and responsive.
                    I have been creating web applications for 2 years and am always excited to explore new frontend technologies.
                </p>
                <div className="hero-location">
                    <img alt="Headshot of Shawn" className="hero-location-icon" src="../icons/location.svg" />
                    <p>Palo Alto, California</p>
                </div>
                <div className="hero-socials">
                    <a href="https://github.com/shawn8913" target="_blank">
                        <img className="hero-social-icon" src="../icons/github.svg" />
                    </a>
                    <a href="https://www.linkedin.com/in/shawn-liu-bbaba2158/" target="_blank">
                        <img className="hero-social-icon" src="../icons/linkedin.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}