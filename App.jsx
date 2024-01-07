import React from 'react'
import Components from './components';

export default function App() {
    return (
        <div className="body">
            <header>
                <Components.Header />
            </header>
            <main>
                <Components.Hero />
                <Components.About />
                <Components.Skills />
                <Components.Experiences />
                <Components.Projects />
                <Components.Contact />
            </main>
        </div>
    )
}