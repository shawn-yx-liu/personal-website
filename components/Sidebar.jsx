import React from 'react'

export default function Sidebar({dark, sidebarOpen, toggle, toggleTheme}) {
    return (
        <div className={`sidebar ${sidebarOpen ? 'slide-in' : ''} ${dark ? "dark" : ""}`}>
            <div className="sidebar-header">
                <h1>&lt;Shawn /&gt;</h1>
                <button className="sidebar-close-btn" onClick={toggle}>
                    <img className="icon" src="../icons/close.svg"/>
                </button>
            </div>
            <div className={`sidebar-links ${dark ? "sidebar-links-dark" : ""}`}>
                <a href="#about" onClick={toggle} className="sidebar-row">
                    About
                </a>
                <a href="#experiences" onClick={toggle} className="sidebar-row">
                    Experiences
                </a>
                <a href="#projects" onClick={toggle} className="sidebar-row">
                    Projects
                </a>
                <a href="#contact" onClick={toggle} className="sidebar-row">
                    Contact
                </a>
            </div>
            <div className="sidebar-row">
                <p>Switch Theme</p>
                <button className="sidebar-theme-btn" onClick={toggleTheme}>
                    <img className="sidebar-theme icon" src={dark ? "../icons/moon.svg" : "../icons/sun.svg"} />
                </button>
            </div>
        </div>
    )
}