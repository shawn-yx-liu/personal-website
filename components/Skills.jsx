import React from 'react';

function Skill({logo, link, skill}) {
    return (
        <div className="skill">
            <a href={link} target="_blank">
                <img className="skill-logo" src={logo} />
            </a>
            <p className="skill-text">{skill}</p>
        </div>
    )
}

export default function Skills() {
    return (
        <div className="page">
            <p className="tag">Skills</p>
            <p>The skills, tools, and technologies I am really good at:</p>
            <div className="skills-container">
                <Skill logo="../logos/javascript.svg" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" skill="Javascript" />
                <Skill logo="../logos/typescript.svg" link="https://www.typescriptlang.org/" skill="Typescript" />
                <Skill logo="../logos/html.svg" link="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" skill="HTML" />
                <Skill logo="../logos/sass.svg" link="https://sass-lang.com/" skill="Sass/Scss" />
                <Skill logo="../logos/react.svg" link="https://react.dev/" skill="React" />
                <Skill logo="../logos/angular.svg" link="https://angular.io/" skill="Angular" />
                <Skill logo="../logos/vite.svg" link="https://vitejs.dev/" skill="Vite" />
                <Skill logo="../logos/sql-server.svg" link="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" skill="SQL Server" />
                <Skill logo="../logos/cypress.svg" link="https://www.cypress.io/" skill="Cypress" />
                <Skill logo="../logos/git.svg" link="https://git-scm.com/" skill="Git" />
            </div>
        </div>
    )
}