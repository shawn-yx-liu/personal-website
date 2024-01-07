import React from 'react'
import Components from './components';

export default function App() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);

    function toggleSidebar() {
        setSidebarOpen(prevSidebarOpen => !prevSidebarOpen);
    }

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }

    return (
        <div className="body">
            <header>
                <Components.Header dark={darkMode} toggle={toggleSidebar} />
            </header>
            <main>
                <Components.Hero dark={darkMode} />
                <Components.About dark={darkMode} />
                <Components.Skills dark={darkMode} />
                <Components.Experiences dark={darkMode} />
                <Components.Projects dark={darkMode} />
                <Components.Contact dark={darkMode} />
            </main>
            <Components.Sidebar dark={darkMode} sidebarOpen={sidebarOpen} toggle={toggleSidebar} toggleTheme={toggleDarkMode}/>
            <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
        </div>
    );
}