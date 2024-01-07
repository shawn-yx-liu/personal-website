import React from 'react';

export default function Header({toggle}) {
    return (
        <div className="header">
            <button className="header-btn">
                <a className="header-left" href=".">&lt;Shawn /&gt;</a>
            </button>
            <button className="header-hamburger" onClick={toggle}>
                <img src="../icons/hamburger.svg" />
            </button>
        </div>
    )
}