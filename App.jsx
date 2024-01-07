import React from 'react'
import Components from './components';

export default function App() {
    const theme = localStorage.getItem("theme") || "light";
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(theme === "dark");

    function toggleSidebar() {
        setSidebarOpen(prevSidebarOpen => !prevSidebarOpen);
    }

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }

    React.useEffect(() => {
        if (darkMode) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }, [darkMode])

    return (
        <div className="body">
            <header>
                <Components.Header dark={darkMode} toggle={toggleSidebar} toggleTheme={toggleDarkMode} />
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