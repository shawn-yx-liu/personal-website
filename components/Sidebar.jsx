import React from 'react'

export default function Sidebar({sidebarOpen, toggle}) {
    return (
        <div className={`sidebar ${sidebarOpen ? 'slide-in' : ''}`}>
            <div className="sidebar-header">
                <h1>&lt;Shawn /&gt;</h1>
                <button className="sidebar-close-btn" onClick={toggle}>
                    <img src="../icons/close.svg"/>
                </button>
            </div>
            <div className="sidebar-links">
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
        </div>
    )
}