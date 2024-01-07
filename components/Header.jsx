import React from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

export default function Header({dark, toggle, toggleTheme}) {
    const windowSize = useWindowSize();


    return windowSize.width <= 900 ? (
        <div className={`header ${dark ? "dark header-dark" : ""}`}>
            <button className="header-btn">
                <a className="header-left" href=".">&lt;Shawn /&gt;</a>
            </button>
            <button className="header-hamburger" onClick={toggle}>
                <img className="icon" src="../icons/hamburger.svg" />
            </button>
        </div>
    ) : (
        <div className={`header ${dark ? "dark header-dark" : ""}`}>
            <button className="header-btn">
                <a className="header-left" href=".">&lt;Shawn /&gt;</a>
            </button>
            <div className="header-right">
                <div className="header-link-container">
                    <a href="#about" className="header-link">
                        About
                    </a>
                    <a href="#experiences" className="header-link" >
                        Experiences
                    </a>
                    <a href="#projects" className="header-link" >
                        Projects
                    </a>
                    <a href="#contact" className="header-link" >
                        Contact
                    </a>
                </div>
                <button className="header-theme-btn" onClick={toggleTheme}>
                    <img className="header-theme icon" src={dark ? "../icons/moon.svg" : "../icons/sun.svg"} />
                </button>
            </div>
        </div>
    )
}