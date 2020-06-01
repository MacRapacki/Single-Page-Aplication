import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Nav.css'

const menuLinks = [
    { name: 'home', path: '/' },
    { name: 'products', path: '/products' },
    { name: 'contact', path: '/contact' },
    { name: 'admin', path: '/admin' },
]

const Nav = () => {

    const menu =
        menuLinks.map((link) =>
            <li>
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