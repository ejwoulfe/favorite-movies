import React from 'react';
import ListMenu from './list_menu/list_menu';
import './navbar.scss';
import SearchBar from './search_bar/search_bar';

function NavBar() {

    return (
        <nav className="navigation-bar">
            <img className="logo" alt="logo" src="#"></img>
            <a href="#">Sign In</a>
            <SearchBar />
            <ListMenu />
        </nav>
    );
}

export default NavBar;