import React from 'react'
import Components from './components';

export default function App() {
    return (
        <div className="app">
            <Components.Header />
            <Components.Hero />
            <Components.About />
            <Components.Skills />
            <Components.Experience />
            <Components.Projects />
            <Components.Contact />
            <Components.Footer />
        </div>
    )
}