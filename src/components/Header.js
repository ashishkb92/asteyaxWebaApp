import React from 'react';
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <h1>Web App</h1>
            <NavLink to="/" activeClassName='highlight' exact={true}>Home</NavLink>
            <NavLink to="/register" activeClassName='highlight'>Register</NavLink>
            <NavLink to="/dashboard" activeClassName='highlight'>Dashboard</NavLink>
            <NavLink to="/help" activeClassName='highlight'>Help</NavLink>
        </header>
    )
}

export default Header;