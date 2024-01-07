import React from 'react';

export default function Header({dark, toggle}) {
    return (
        <div className={`header ${dark ? "dark header-dark" : ""}`}>
            <button className="header-btn">
                <a className="header-left" href=".">&lt;Shawn /&gt;</a>
            </button>
            <button className="header-hamburger" onClick={toggle}>
                <img className="icon" src="../icons/hamburger.svg" />
            </button>
        </div>
    )
}