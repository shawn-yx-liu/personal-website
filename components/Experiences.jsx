import React from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

function Experience({logo, link, dates, title, children}) {
    const windowSize = useWindowSize();

    return windowSize <= 768 ? (
        <div className="card experience">
            <a href={link} target="_blank">
                <img className="experience-logo" src={logo} />
            </a>
            <p className="experience-date">{dates}</p>
            <h3 className="experience-title">{title}</h3>
            {children}
        </div>
    ) : (
        <div className="card experience">
            <a href={link} target="_blank">
                <img className="experience-logo" src={logo} />
            </a>
            <div className="experience-wide">
                <h3 className="experience-title">{title}</h3>
                {children}
            </div>
            <p className="experience-date">{dates}</p>
        </div>
    )
}

export default function Experiences({dark}) {
    return (
        <div className={`page page-even ${dark ? "dark dark-even" : ""}`} id="experiences">
            <p className="tag tag-lg">Experience</p>
            <p>Here's where I've worked at:</p>
            <Experience logo="../logos/tiktok.svg" link="https://www.tiktok.com/en/" dates="July 2024 - Present" title="Software Engineer, Ads Measurement Signal">
                <ul>
                    <li><p>Developed a feature for TikTok Events Manager that measures and diagnoses issues related to event match quality.</p></li>
                    <li><p>Designed and implemented infrastucture revamp focused on reducing the delay of diagnosis warnings.</p></li>
                </ul>
            </Experience>
            <Experience logo="../logos/omnicell.svg" link="https://www.omnicell.com/" dates="May 2021 - July 2024" title="Software Engineer">
                <ul>
                    <li><p>Designed and developed web apps to support large-scale routing of pharmaceutical drugs between hospitals in US health networks.</p></li>
                    <li><p>Built and maintained a desktop app acting as a hardware simulator to support remote automated testing.</p></li>
                </ul>
            </Experience>
            <Experience logo="../logos/hitachi.svg" link="https://www.hitachienergy.com/us/en" dates="May 2020 - August 2020" title="Software Process Management Intern">
                <ul>
                    <li><p>Worked with product director to create and document agile workflow for software development process.</p></li>
                    <li><p>Brainstormed new ideas and proposed optimizations to minimize resource bottlenecks using a value-based model.</p></li>
                </ul>
            </Experience>

            {/* <a className="experiences-btn" href="#" target="_blank">VIEW DETAILED WORK EXPERIENCE</a> */}
        </div>
    )
}