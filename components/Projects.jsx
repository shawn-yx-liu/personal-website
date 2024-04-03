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
                    { link && <a className="project-link" href={link} target="_blank">View Site</a> }
                    { githubLink && <a className="project-link" href={githubLink} target="_blank">View Repo</a> }
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
                title="The Board" 
                image="../images/the-board.jpg"
                description="An operational dashboard built for a company hackathon. It keeps track of the status and details of restock orders for a pharmacy."
                skills={["Angular", "TypeScript", "Chart.js", "GraphQL", "PostgreSQL"]}
            />

            <Project 
                parity="1"
                title="Brain Blitz" 
                image="../images/brain-blitz.png"
                link="https://brain-blitz-shawnliu.netlify.app/"
                githubLink="https://github.com/shawn-yx-liu/brain-blitz"
                description="A trivia game for testing your knowledge in a variety of topics. You can quiz yourself or compete with a friend for a higher score."
                skills={["React", "Socket.io", "Express.js", "Netlify", "Heroku"]}
            />
        </div>
    )
}