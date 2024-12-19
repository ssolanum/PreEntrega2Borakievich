import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
return (
    <nav className="navbar">
        <h1><Link to="/">Pet Toy Store</Link></h1>
        <ul className="nav-links">
            <li><Link to="/category/dogs">Dogs</Link></li>
            <li><Link to="/category/cats">Cats</Link></li>
            <li><Link to="/category/birds">Birds</Link></li>
        </ul>
    </nav>
    );
}

export default Navbar;