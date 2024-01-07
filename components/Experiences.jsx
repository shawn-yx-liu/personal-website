import React from 'react';

function Experience({logo, link, dates, title, children}) {
    return (
        <div className="experience">
            <a href={link} target="_blank">
                <img className="experience-logo" src={logo} />
            </a>
            <p className="experience-date">{dates}</p>
            <h3 className="experience-title">{title}</h3>
            {children}
        </div>
    )
}

export default function Experiences() {
    return (
        <div className="page page-even">
            <p className="tag">Experience</p>
            <p>Here's where I've worked at:</p>
            <Experience logo="../logos/omnicell.svg" link="https://www.omnicell.com/" dates="May 2021 - Present" title="Software Engineer I">
                <ul>
                    <li>Designed and developed web apps to support large-scale routing of pharmaceutical drugs.</li>
                    <li>Built a desktop app acting as a hardware simulator to support remote automated testing.</li>
                </ul>
            </Experience>
            <Experience logo="../logos/hitachi.svg" link="https://www.hitachi.com/" dates="May 2020 - August 2020" title="Software Process Management Intern">
                <ul>
                    <li>Worked with product director to create and document agile workflow for software development process.</li>
                    <li>Brainstormed new ideas and proposed optimizations to minimize resource bottlenecks using a value-based model.</li>
                </ul>
            </Experience>

            {/* <a className="experiences-btn" href="#" target="_blank">VIEW DETAILED WORK EXPERIENCE</a> */}
        </div>
    )
}