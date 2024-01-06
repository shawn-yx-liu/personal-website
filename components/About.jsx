import React from 'react';

export default function About() {
    return (
        <div className="page">
            <p className="tag">About me</p>
            <img className="about-portrait" src="../images/portrait_Hawaii.JPG" />
            <h2 className="about-header">Who am I?</h2>
            <p className="about-text">
                I'm a passionate software engineer based in Palo Alto, CA who's experienced in building fullstack applications from scratch to production.
                I am very enthusiastic about creating intuitive and accessible digital experiences. 
            </p>
            <p>
                My journey as a programmer started at Carnegie Mellon University, where I developed analytical fundamentals as a Physics and Computer Science double major.
                Since then, I've continued to grow as a software developer, taking on new challenges and building software for a handful of awesome companies along the way.
                Today, 6 years after printing my first "Hello World," my scope of work has expanded into creating cutting-edge web applications using modern frontend technologies like React, Angular, and much more.
            </p>
            <p>
                When I'm not staring at a computer screen, you can usually find me hiking in some remote trail in the Bay, sampling popup food shops, or baking a new recipe I found on Tasty.
            </p>
        </div>
    )
}