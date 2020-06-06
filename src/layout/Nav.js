import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Nav.css'

const menuLinks = [
    { id: 1, name: 'home', path: '/' },
    { id: 2, name: 'products', path: '/products' },
    { id: 3, name: 'contact', path: '/contact' },
    { id: 4, name: 'admin', path: '/admin' },
]

const Nav = () => {

    const menu =
        menuLinks.map((link) =>
            <li key={link.id}>
                <NavLink exact to={link.path}>{link.name}
                </NavLink>
            </li>
        )


    return (
        <nav>
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Nav;