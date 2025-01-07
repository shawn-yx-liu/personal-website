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

export default function Skills({dark}) {
    return (
        <div className={`page ${dark ? "dark" : ""}`}>
            <p className="tag tag-lg">Skills</p>
            <p>The tools and technologies I'm really good at:</p>
            <div className="skills-container">
                <Skill logo="../logos/javascript.svg" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" skill="Javascript" />
                <Skill logo="../logos/typescript.svg" link="https://www.typescriptlang.org/" skill="Typescript" />
                <Skill logo="../logos/react.svg" link="https://react.dev/" skill="React" />
                <Skill logo="../logos/angular.svg" link="https://angular.io/" skill="Angular" />
                <Skill logo="../logos/html.svg" link="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" skill="HTML" />
                <Skill logo="../logos/css.svg" link="https://developer.mozilla.org/en-US/docs/Web/CSS" skill="CSS" />
                <Skill logo="../logos/golang.svg" link="https://go.dev/" skill="Golang" />
                <Skill logo="../logos/c-sharp.svg" link="https://dotnet.microsoft.com/en-us/languages/csharp" skill="C#" />
                <Skill logo="../logos/python.svg" link="https://www.python.org/" skill="Python" />
                <Skill logo="../logos/sql-server.svg" link="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" skill="SQL Server" />
                <Skill logo="../logos/graphql.svg" link="https://graphql.org/" skill="GraphQL" />
                <Skill logo="../logos/dotnet.svg" link="https://dotnet.microsoft.com/en-us/apps/aspnet" skill="ASP.NET" />
                <Skill logo={dark ? "../logos/socket-io-light.svg" : "../logos/socket-io.svg"} link="https://socket.io/" skill="Socket.io" />
                <Skill logo="../logos/netlify.svg" link="https://www.netlify.com/" skill="Netlify" />
                <Skill logo={dark ? "../logos/cypress-light.svg" : "../logos/cypress.svg"} link="https://www.cypress.io/" skill="Cypress" />
                <Skill logo="../logos/git.svg" link="https://git-scm.com/" skill="Git" />
            </div>
        </div>
    )
}