import React from 'react';
import Menu from '../components/Header/Menu';
import Navigation from '../components/Header/Navigation';

const Header = () => {
    return (
        <div>
            <Navigation />
            <Menu />
        </div>
    );
};

export default Header;