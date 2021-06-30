import React, { useContext } from 'react';
import ListMenu from './list_menu/list_menu';
import './navbar.scss';
import SearchBar from './search_bar/search_bar';
import movie_logo from '../../Assets/UI Icons/video-camera.svg'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


function NavBar() {
    const { user, setUser } = useContext(UserContext);



    return (
        <nav className="navigation-bar">
            <div id="navigation_content">
                <div id="logo_container">
                    <Link to="/"> <img id="logo" className="filter-white" alt="logo" src={movie_logo}></img></Link>
                </div>
                <SearchBar />

                {user ? <button onClick={() => {
                    setUser(null);
                }}>Logout</button> :
                    <Link id="login_button" to="/login">
                        <button id="login_button">Log In</button>
                    </Link>
                }

                <ListMenu />
            </div>
        </nav>
    );
}

export default NavBar;