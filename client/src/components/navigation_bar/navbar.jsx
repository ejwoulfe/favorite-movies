import React from 'react';
import ListMenu from './list_menu/list_menu';
import './navbar.scss';
import SearchBar from './search_bar/search_bar';
import movie_logo from '../../Assets/UI Icons/video-camera.svg'
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navigation-bar">
            <div id="navigation_content">
                <div id="logo_container">
                    <Link to="/"> <img id="logo" className="filter-white" alt="logo" src={movie_logo}></img></Link>
                </div>
                <SearchBar />
                <button id="sign_in_button" href="#">Sign In</button>
                <ListMenu />
            </div>
        </nav>
    );
}

export default NavBar;