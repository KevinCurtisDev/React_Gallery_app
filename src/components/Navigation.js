import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/flowers">Flowers</NavLink></li>
                <li><NavLink to="/trees">Trees</NavLink></li>
                <li><NavLink to="/sunset">Sunset</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;