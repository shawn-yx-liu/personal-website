import React from 'react';

function Project({parity, title, image, description, link, githubLink, skills}) {
    return (
        <div className={`card project ${parity === "1" ? "project-reverse" : ""}`}>
            <a href={link} target="_blank">
                <img className="project-image" src={image} />
            </a>
            <div className="project-text">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-skills-container">
                    {skills.map(skill => <p className="tag" key={skill}>{skill}</p>)}
                </div>
                <div className="project-links-container">
                    <a className="project-link" href={link} target="_blank">View Site</a>
                    <a className="project-link" href={githubLink} target="_blank">View Repo</a>
                </div>
            </div>
        </div>
    )
}

export default function Projects({dark}) {
    return (
        <div className={`page ${dark ? "dark" : ""}`} id="projects">
            <p className="tag tag-lg">Projects</p>
            <p>Some of my favorite projects:</p>
            <Project 
                parity="0"
                title="Brain Blitz" 
                image="../images/brain-blitz.png"
                link="https://brain-blitz-shawnliu.netlify.app/"
                githubLink="https://github.com/shawn-yx-liu/brain-blitz"
                description="A trivia game for testing your knowledge in a variety of topics. You can quiz yourself or compete with a friend for a higher score."
                skills={["React", "Javascript", "HTML", "CSS", "Socket.io", "Express.js", "Vite", "Netlify", "Git"]}
            />

            <Project 
                parity="1"
                title="User Dashboard" 
                image="../images/user-dashboard.png"
                link="https://user-dashboard-shawnliu.netlify.app/"
                githubLink="https://github.com/shawn-yx-liu/user-dashboard"
                description="A Google Chrome extension akin to Momentum. You can check the time, create a todo list, and check the price of your favorite stock."
                skills={["Javascript", "HTML", "CSS", "Vite", "Netlify", "Git"]}
            />
        </div>
    )
}