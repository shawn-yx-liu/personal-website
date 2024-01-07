import React from 'react'
import Components from './components';

export default function App() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    function toggleSidebar() {
        setSidebarOpen(prevSidebarOpen => !prevSidebarOpen)
    }

    return (
        <div className="body">
            <header>
                <Components.Header toggle={toggleSidebar} />
            </header>
            <main>
                <Components.Hero />
                <Components.About />
                <Components.Skills />
                <Components.Experiences />
                <Components.Projects />
                <Components.Contact />
            </main>
            <Components.Sidebar sidebarOpen={sidebarOpen} toggle={toggleSidebar} />
            <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>

        </div>
    )
}