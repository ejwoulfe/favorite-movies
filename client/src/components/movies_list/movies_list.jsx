import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import './movies_list.scss';
import list_view from '../../Assets/UI Icons/list-view.svg'
import grid_view from '../../Assets/UI Icons/grid-view.svg'
import GridView from './grid_view/grid_view';
import ListView from './list_view/list_view';


function MoviesList() {
    const [moviesList, setMoviesList] = useState([]);
    const [gridView, setGridView] = useState(JSON.parse(sessionStorage.getItem('moviesGridViewBoolean')) || false);





    useEffect(() => {
        /*
        *  Which ever view is selected, disable to corresponding button and reduce its opacity by 50%.
        *  The other button will maintain its 100% opacity, changes it occordingly based on the current view.
        */

        sessionStorage.setItem('moviesGridViewBoolean', gridView);


        if (gridView) {
            document.getElementById("list_view_button").disabled = false;
            document.getElementById("list_view_button").style.opacity = "1";

            document.getElementById("grid_view_button").disabled = true;
            document.getElementById("grid_view_button").style.opacity = "0.5";

        } else {
            document.getElementById("grid_view_button").disabled = false;
            document.getElementById("grid_view_button").style.opacity = "1";

            document.getElementById("list_view_button").disabled = true;
            document.getElementById("list_view_button").style.opacity = "0.5";

        }



    }, [gridView])

    useEffect(() => {



        axios({
            method: 'GET',
            url: 'http://localhost:5000/movies/api'
        }).then(res => {
            setMoviesList(res.data)


        })
    }, []);






    return (

        <div id="movies_list_content">
            <h1 id="movies_list_title">Movies</h1>
            <div id="display_options">
                <input onClick={() => { setGridView((gridView) => !gridView) }} className="view_buttons" id="list_view_button" type="image" src={list_view} alt="List view button" />
                <input onClick={() => { setGridView((gridView) => !gridView) }} className="view_buttons" id="grid_view_button" type="image" src={grid_view} alt="Grid view button" />
            </div>



            {gridView ? <GridView movies={moviesList} /> : <ListView movies={moviesList} />}

        </div>









    );
}

export default MoviesList;