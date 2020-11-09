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

            <input onClick={buttonClicked} className="view_buttons" id="nav_list_menu" type="image" src={list_icon} alt="button to open a navigation list for movies and actors" />
        </>
    );
}


export default ListMenu;