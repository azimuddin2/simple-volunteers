import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav className='menu'>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/count">Count</CustomLink>
            <CustomLink to="/volunteers">Volunteers</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </nav>
    );
};

export default Header;