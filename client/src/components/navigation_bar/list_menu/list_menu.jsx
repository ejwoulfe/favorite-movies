import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import list_icon from "../../../Assets/UI Icons/list.svg"
import './list_menu.scss';

function ListMenu() {
    const [clicked, setClicked] = useState(false);


    function buttonClicked() {
        setClicked(prevClicked => !prevClicked)

    }

    useEffect(() => {
        if (clicked === true) {
            console.log('The button was just clicked!')
        }

    }, [clicked])


    return (
        <>
            <button id="list_button" onClick={buttonClicked}>
                <img id="list_image" src={list_icon} alt="button to open a navigation list for movies and actors" className="filter-white" />
            </button>
        </>
    );
}

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default ListMenu;