import React from 'react';
import './search_bar.scss';

function SearchBar() {

    return (
        <div id="search_bar_container">
            <input id="search_bar" type="text" placeholder="Search..."></input>
        </div>
    );
}

export default SearchBar;